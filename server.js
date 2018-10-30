const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

module.exports = app;
