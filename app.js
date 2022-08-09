require("dotenv").config();
const express = require("express");
const app = express();
const routerInfo = require("./routes/routerInfo/routerInfo");
const routerError = require("./routes/routerError/routerError");
const routeValid = require("./utils/middlewareRoute");

app.use("/",routeValid, routerInfo);
app.use("/", routerError);

module.exports = app;
