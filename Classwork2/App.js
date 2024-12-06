const jsonwebtoken = require("jsonwebtoken");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server At work");
});

app.post("/generate", (req, res) => {
  let user = req.body;
  let token = jsonwebtoken.sign(user, "Smacky12", { expiresIn: 10 });
  res.send(token);
});

app.get("/verify", (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let data = jsonwebtoken.verify(token, "Smacky12");
    res.send(data);
  } catch (error) {
    res.status(401).send({ error: "Invalid or missing token" });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
