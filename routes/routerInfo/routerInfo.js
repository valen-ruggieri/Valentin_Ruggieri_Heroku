const express = require("express");
const routerInfo = express.Router();

routerInfo.get("/infobloq", (req, res) => {
  console.log(`GET - ${req.path}`);
  res.send(`GET - ${req.path}`);
});
routerInfo.get("/infonobloq", (req, res) => {
  res.send(`GET - ${req.path}`);
});

module.exports = routerInfo;
