const express = require("express");
const path = require("path");
const Path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  res.send("index.html");
});
const port = 3000;

app.listen(port, () => {
  console.log("server is running");
});
