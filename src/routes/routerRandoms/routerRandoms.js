const express = require("express");
const routerRandom = express.Router();
routerRandom.get("/randoms", (req, res) => {
  res.send("randoms");
});

module.exports = routerRandom;
