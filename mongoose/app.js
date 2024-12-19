const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let dburl = "mongodb://127.0.0.1:27017/myserver";
mongoose
  .connect(dburl)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log("Error in Connection:", err));

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  address: {
    city: String,
    zip: Number,
    state: String,
  },
});

const userModel = mongoose.model("users", userSchema);

app.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/newUser", async (req, res) => {
  try {
    const bodyData = req.body;
    let userData = new userModel(bodyData);
    let response = await userData.save();
    console.log(req.body);
    res.status(201).send("Data send Successfully");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
