const express = require("express");
const app = express();
app.use(express.json()); // parsing the Json body data
const port = 3000;

app.get("/", (req, res) => {
  res.send("API is working");
});
app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("data recieved");
});
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
