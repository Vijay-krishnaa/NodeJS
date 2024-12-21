const mongoose = require("mongoose");

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

module.exports = userModel;
