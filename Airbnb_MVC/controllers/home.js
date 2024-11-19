const { Home } = require("../models/home_details");

exports.home = (req, res) => {
  Home.readData((err, data) => {
    if (err) {
      console.log("Error reading data:", err);
      return res.status(500).send("Error loading data");
    }
    res.render("home", { RegisteredHome: data });
  });
};
