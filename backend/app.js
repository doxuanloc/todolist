const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors')
const { DataSource } = require("typeorm");

async function getDDBClient() {
        const AppDataSource = new DataSource({
                type: "mysql",
                host: "db",
                port: 3306,
                username: "root",
                password: "password",
                database: "todolist",
                synchronize: true,
                logging: false,
        });

        return await AppDataSource.initialize()
}



async function main() {

        const dbClient = await getDDBClient()
        app.use(cors())
        app.get("/", async (req, res) => {
                const result = await dbClient.query("SELECT * FROM task")
                res.json(result)
        });

        app.listen(port, () => {
                console.log(`Example app listening on port ${port}`);
        });
}

main()
