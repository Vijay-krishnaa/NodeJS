const express = require("express");
const homerouter = express.Router();
const rootDir = require("../utils/util");
const path = require("path");
const registereduser = require("./contact-us");
homerouter.get("/", (req, res, next) => {
  console.log(registereduser);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
module.exports = homerouter;
