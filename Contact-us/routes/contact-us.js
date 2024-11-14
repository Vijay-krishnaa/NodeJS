const path = require("path");

const express = require("express");
const rootDir = require("../utils/util");

const contactRoute = express.Router();
contactRoute.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});
contactRoute.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "thanks.html"));
});
module.exports = contactRoute;
