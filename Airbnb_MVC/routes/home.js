const express = require("express");
const { home } = require("../controllers/home");
const homeRouter = express.Router();
homeRouter.get("/", home);
module.exports = homeRouter;
