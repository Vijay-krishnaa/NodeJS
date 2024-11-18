const express = require("express");
const registerRouter = express.Router();

const { getAddhome } = require("../controllers/getAddhome");
const { postAddhome } = require("../controllers/postAddhome");

registerRouter.get("/register-here", getAddhome);
registerRouter.post("/thanks", postAddhome);

module.exports = { registerRouter };
