const express = require("express");
const app = express();
const port = 8000;
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
        app.get("/", async (req, res) => {
                const result = await dbClient.query("SELECT * FROM task")
                console.log("result", result)
                res.send("Hello World!");
        });

        app.listen(port, () => {
                console.log(`Example app listening on port ${port}`);
        });
}

main()
