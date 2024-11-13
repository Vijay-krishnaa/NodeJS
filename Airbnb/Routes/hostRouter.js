const express = require("express");
const hostRouter = express.Router();
hostRouter.get("/host-home", (req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
   
    <title>Airbnb</title>
  </head>
  <body>
    <form action="host-login" method="post">
    <input type="text" name="HouseName" placeholder="Enter your HouseName" />
    <button type="submit">submit</button>
    </form>
  </body>
</html>
`);
});

hostRouter.post("/host-login", (req, res, next) => {
  res.send(`<h1>thanks for the Details</h1>`);
  console.log(req.body);
});
module.exports = hostRouter;
