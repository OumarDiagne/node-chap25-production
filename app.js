const express = require("express"); //installe via npm
const morgan = require("morgan"); //installe via npm
const path = require("path"); //module core de node.js
const index = require("./routes");
const errorHandler = require("errorhandler");
require("./database");

const app = express();

module.exports = app;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
require("./config/session.config");
require("./config/passport.config");

//mise en place des middlewares natif.
app.use(morgan("short")); //logger
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);
console.log(process.env.NODE_ENV);
//definition des routes.
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code,
      message: code === 500 ? null : err.code,
    });
  });
}
