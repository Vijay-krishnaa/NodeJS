const path = require("path");
const express = require("express");

const hostRouter = express.Router();
const rootDir = require("../utils/pathutlis");
hostRouter.get("/host-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "login.html"));
});

hostRouter.post("/host-login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "login-success.html"));
  console.log(req.body);
});
module.exports = hostRouter;
