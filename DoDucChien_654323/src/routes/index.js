const newsRouter = require("./news");
const meRouter = require("./me");
const coursesRouter = require("./courses");
const loginRouter = require("./login");
const registerRouter = require("./register");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/login" , loginRouter);
  app.use("/register", registerRouter);
  app.use("/", siteRouter);
}

module.exports = route;
