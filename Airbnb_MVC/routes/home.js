const express = require("express");
const { home, getBookings, favlist } = require("../controllers/home");
const homeRouter = express.Router();
homeRouter.get("/", home);
homeRouter.get("/book-here", getBookings);
homeRouter.get("/fav-list", favlist);

module.exports = homeRouter;
