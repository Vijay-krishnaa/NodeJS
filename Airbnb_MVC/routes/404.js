const express = require("express");
const ErrRouter = express.Router();
const { add404 } = require("../controllers/add404");

ErrRouter.use(add404);
module.exports = { ErrRouter };
