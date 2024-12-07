const jsonwebtoken = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get("/", (req, res) => {
  res.send("Server At Work");
});

// Route to generate JWT
app.post("/generate", (req, res) => {
  let user = req.body;
  let token = jsonwebtoken.sign(user, "Smacky12", { expiresIn: "1h" }); // Extended expiration time
  res.send({ token });
});

// Route to verify JWT+
app.get("/verify", (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let data = jsonwebtoken.verify(token, "Smacky12");
    res.send({ data });
  } catch (error) {
    res.status(401).send({ error: "Invalid or missing token" });
  }
});

// Signup route
app.post("/signup", (req, res) => {
  // res.send({ user: req.body });
  const { name, email, password } = req.body;
  let saltRound = 10;
  bcrypt.hash(password, saltRound, (err, hashedPassword) => {
    res.send({ email, name, password: hashedPassword });
  });
});
app.post("/login", (req, res) => {
  const { password } = req.body;
  const hashedPassword =
    "$2b$10$HwiMnChAGF4lCSb9bCnB0O2RjifBZbaWw8HBMgkXHaLMiowNy8HCu";
  bcrypt.compare(password, hashedPassword, (err, result) => {
    if (result) {
      res.send("login Successfull");
    } else {
      res.status(404).send("wrong Password");
    }
  });
});

// Start server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
