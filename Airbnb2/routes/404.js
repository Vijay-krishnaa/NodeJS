const express = require("express");
const path = require("path");
const rootDir = require("../utils/utils");
const ErrRouter = express.Router();
ErrRouter.get("/404", (req, res) => {
  res.render("404");
});
module.exports = ErrRouter;
