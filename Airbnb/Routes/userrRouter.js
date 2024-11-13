const path = require("path");

const express = require("express");

const userRouter = express.Router();
const rootDir = require("../utils/pathutlis");
userRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
module.exports = userRouter;
