const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
//middleware
app.use(express.json()); // parsing the Json body data
const port = 3000;

app.get("/", (req, res) => {
  res.send("API is working");
});
app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("data recieved");
});
app.post("/age", (req, res) => {
  let { age } = req.body;
  if (age > 18) res.send({ message: "User is eligible for vote" });
  else res.send("user is not eligible");
});
app.put("/urldata", (req, res) => {
  res.send(req.body);
});
app.post("/queryparam", (req, res) => {
  console.log(req.query);
});
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
