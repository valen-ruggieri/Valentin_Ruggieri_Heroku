require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const routerInfo = require("./routes/routerInfo/routerInfo");
const routerError = require("./routes/routerError/routerError");
const routeValid = require("./utils/middlewareRoute");

app.set("views", path.join(__dirname + "/public/views"));
app.set("view engine", "ejs");

app.use("/", routeValid, routerInfo);
app.use("/", routerError);

module.exports = app;
