const express = require("express");

const successfullRoute = express.Router();
successfullRoute.post("/thanks", (req, res) => {
  res.render("thanks");
});
module.exports = successfullRoute;
