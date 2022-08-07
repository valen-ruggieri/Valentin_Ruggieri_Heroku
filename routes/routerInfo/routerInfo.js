const express = require("express");
const routerInfo = express.Router();
const numCPUs = require('os').cpus().length
const pid= process.pid
routerInfo.get("/info", (req, res) => {
  res.send(`Number of proccess:${numCPUs} in ${pid}`)
});

module.exports = routerInfo;
