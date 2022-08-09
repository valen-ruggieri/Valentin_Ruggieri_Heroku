
const logger = require("./loggers/loggers");


const routeValid = (req, res, next) => {
 
  if (req.path === "/info" || req.path === "/infozip"||req.path === "/errorRoute" ||req.path ==="/errorAPI") {
    next();
  
  } else {
    logger.warn(`Route "${req.path}" dont exist`)
    return res.redirect("/errorRoute");
  }
};
module.exports = routeValid;
