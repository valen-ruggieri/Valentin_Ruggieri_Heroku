const express = require("express");
const logger = require("../../utils/loggers/loggers");
const routerError = express.Router();

routerError.get("/errorAPI", (req, res) => {
  logger.error(`Query for API failed`);
  res.render("logger.ejs", {
    color: "danger",
    text: `ERROR API - Query for API failed`,
  });
});

module.exports = routerError;
