const express = require("express");
const routerInfo = express.Router();
const numCPUs = require("os").cpus().length;
const compression = require("compression");
const pid = process.pid;
const info = `Number of proccess:${numCPUs} in ${pid}`;
const logger= require("../../utils/loggers/loggers");


routerInfo.get("/infozip", compression(), (req, res) => {
  logger.info(`GET - ${req.path}`);
  res.send(info);
});
routerInfo.get("/info", (req, res) => {
  logger.info(`GET - ${req.path}`);
  res.send(info);
});

module.exports = routerInfo;
