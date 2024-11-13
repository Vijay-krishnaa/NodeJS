const express = require("express");
const app = express();
app.use(require("body-parser").urlencoded());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.get("/home", (req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
   
    <title>Airbnb</title>
  </head>
  <body>
    <form action="user-login" method="post">
    <input type="text" name="HouseName" placeholder="Enter your HouseName" />
    <button type="submit">submit</button>
    </form>
  </body>
</html>
`);
});

app.post("/user-login", (req, res, next) => {
  res.send(`<h1>thanks for the Details</h1>`);
  console.log(req.body);
});

const port = 3009;
app.listen(port, () => {
  console.log(`Server is runnig at http://localhost:${port}`);
});
