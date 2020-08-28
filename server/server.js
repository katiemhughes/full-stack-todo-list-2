const express = require("express");
const apiRouter = require("./routes/apiRouter");
const app = express();
const dbConnection = require("./db/connection");

// app.use((req, res, next) => {
//     console.log("Middleware has been successfully executed!");
//     next()
// });

app.use(express.json());
app.use("/todolistfullstack/v1", apiRouter);

app.all("/*", (req, res, next) => {
    res.status(404).send("Route not found")
});

module.exports = app;