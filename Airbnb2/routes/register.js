const express = require("express");
const registerRouter = express.Router();
const RegisteredHome = [];

registerRouter.get("/register-here", (req, res) => {
  res.render("register");
});
registerRouter.post("/thanks", (req, res) => {
  RegisteredHome.push(req.body.houseName);
  console.log(req.body.houseName);
  res.render("thanks");
});

module.exports = registerRouter;
