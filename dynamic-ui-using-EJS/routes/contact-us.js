const path = require("path");
const express = require("express");
const rootDir = require("../utils/util");
const registereduser = []; // Shared array for storing user data

const contactRoute = express.Router();
contactRoute.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

contactRoute.post("/", (req, res, next) => {
  registereduser.push({ user: req.body.name, email: req.body.email });
  console.log("Registered User Added:", req.body);
  res.sendFile(path.join(rootDir, "views", "thanks.html"));
});

module.exports = { contactRoute, registereduser };
