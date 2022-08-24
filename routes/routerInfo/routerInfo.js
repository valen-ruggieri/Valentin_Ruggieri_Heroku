const express = require("express");
const routerInfo = express.Router();

routerInfo.get("/infobloq", (req, res) => {
  console.log(`GET - ${req.path}`);
  res.send(`GET - ${req.path}`);
});

routerInfo.get("/infonobloq", (req, res) => {
  res.send(`GET - ${req.path}`);
});

routerInfo.get("/mensaje", (req, res) => {
  res.send(`Hola Node.js desde heroku ✅✅✅`);
});


module.exports = routerInfo;
