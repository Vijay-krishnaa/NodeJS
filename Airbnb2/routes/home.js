const express = require("express");
const RegisteredHome = require("./register");
const homeRouter = express.Router();
homeRouter.get("/", (req, res) => {
  res.render("home", { RegisteredHome });
});

module.exports = homeRouter;
