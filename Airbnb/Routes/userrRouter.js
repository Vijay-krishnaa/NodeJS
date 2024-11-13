const express = require("express");

const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  res.send(`<h1>welcome to Airbnb</h1>
    <a href="/host-home">Regestier Here</a>`);
});
module.exports = userRouter;
