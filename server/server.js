const express = require("express");
const todoRouter = require("./routes/todoRouter");
const dbConnection = require("./db/connection");
const app = express();

app.use((req, res, next) => {
    console.log("Middleware has been successfully executed!");
    next()
});

app.use(express.json());
app.use("/todolistfullstack/v1", todoRouter);

app.use((req, res, next) => {
    res.status(404).send("404 error - the page resource was not found!")
});

module.exports = app;