const express = require("express");
const registerRouter = express.Router();

const { getAddhome } = require("../controllers/getAddhome");
const {
  postAddhome,
  hosthome,
  postAddfav,
} = require("../controllers/postAddhome");

registerRouter.get("/register-here", getAddhome);
registerRouter.get("/host-home", hosthome);
registerRouter.post("/thanks", postAddhome);
registerRouter.get("/fav-list", postAddfav);

module.exports = { registerRouter };
