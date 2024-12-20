const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
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
    res.status(201).send("Data sent successfully");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get("/allUsers", async (req, res) => {
  try {
    const users = await userModel.find({});

    res.render("allUsers", { users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send({ message: err.message });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
