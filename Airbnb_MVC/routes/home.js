const express = require("express");
const {
  home,
  getBookings,
  homelist,
  homedetails,
} = require("../controllers/home");

const homeRouter = express.Router();
homeRouter.get("/", home);
homeRouter.get("/book-here", getBookings);
homeRouter.get("/home-list", homelist);
homeRouter.get("/home-list/:homeId", homedetails);

module.exports = homeRouter;
