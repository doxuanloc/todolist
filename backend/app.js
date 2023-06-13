const express = require("express");
const app = express();
const port = 8000;
const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "mysql",
  host: "192.168.0.2",
  port: 3306,
  username: "root",
  password: "loc25251325",
  database: "todolist",
  synchronize: true,
  logging: false,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log("success");
  })
  .catch((error) => console.log(error));
console.log("abc");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
