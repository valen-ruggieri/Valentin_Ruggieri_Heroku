const express = require("express");
const routerInfo = express.Router();
const numCPUs = require('os').cpus().length
const compression = require('compression')
const pid= process.pid
const info =(`Number of proccess:${numCPUs} in ${pid}`).repeat(1000)
routerInfo.get("/infozip",compression(), (req, res) => {
  res.send(info)
});
routerInfo.get("/info", (req, res) => {
  res.send(info)
});

module.exports = routerInfo;
