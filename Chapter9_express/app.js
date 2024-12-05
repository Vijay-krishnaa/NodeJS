const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("this is first middleware");
  next();
});
app.use("/", (req, res) => {
  res.status(404).send("404 Not found");
});
app.listen(3000, () => {
  console.log(`server is runnig on http://localhost:3000`);
});
