const express = require("express");
const homerouter = express.Router();

const registereduser = require("./contact-us");
homerouter.get("/", (req, res, next) => {
  console.log(registereduser);
  res.render("home", registereduser);
});
module.exports = homerouter;
