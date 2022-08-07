require("dotenv").config();
const express = require("express");
const app = express();


const routerInfo = require("./routes/routerInfo/routerInfo");
const routerRandom = require("./routes/routerRandoms/routerRandoms");











app.use("/", routerInfo);
app.use("/api", routerRandom);

module.exports = app;
