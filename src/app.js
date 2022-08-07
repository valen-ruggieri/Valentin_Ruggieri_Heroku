require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const routerInfo = require("./routes/routerInfo/routerInfo");
const routerRandom = require("./routes/routerRandoms/routerRandoms");









app.use(express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname + "/public/views"));
app.set("view engine", "ejs");

app.use("/", routerInfo);
app.use("/api", routerRandom);

module.exports = app;
