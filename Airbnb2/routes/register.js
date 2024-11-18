const express = require("express");
const registerRouter = express.Router();
const RegisteredHome = [];

registerRouter.get("/register-here", (req, res) => {
  res.render("register");
});
registerRouter.post("/register-here", (req, res) => {
  const houseName = req.body.houseName;
  console.log(houseName);
});
module.exports = registerRouter;
