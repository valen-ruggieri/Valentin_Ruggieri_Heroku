require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const routerInfo = require("./routes/routerInfo/routerInfo");

app.use(path.join(__dirname + "/public"))
app.set("views", path.join(__dirname + "/public/views"));
app.set("view engine", "ejs");

app.use("/", routerInfo);


module.exports = app;
