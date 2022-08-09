const express = require("express");
const logger = require("../../utils/loggers/loggers");
;

const routerError = express.Router();
routerError.get("/errorRoute", (req, res) => {


res.send('ERROR ROUTE')
});
routerError.get("/errorAPI", (req, res) => {

  logger.error(`Query for API failed`)
  res.send('ERROR API')
  });

module.exports = routerError;
