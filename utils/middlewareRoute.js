const logger = require("./loggers/loggers");

const routeValid = (req, res, next) => {
  if (
    req.path === "/info" ||
    req.path === "/infozip" ||
    req.path === "/favicon.ico" ||
    req.path === "/errorAPI"
  ) {
    next();
  } else {
    logger.warn(`Route "${req.path}" dont exist`);
    return res.render("logger.ejs", {
      color: "warning",
      text: `ERROR ROUTE - Route "${req.path}" dont exist`,
    });
  }
};
module.exports = routeValid;
