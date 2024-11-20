const { Home, RegisteredHome } = require("../models/home_details");

const home = (req, res) => {
  Home.readData((err, data) => {
    if (err) {
      console.error("Error reading data:", err);
      return res.status(500).send("Error loading data");
    }
    res.render("store/home", { RegisteredHome: data });
  });
};

const getBookings = (req, res) => {
  res.render("store/booking");
};

const favlist = (req, res) => {
  Home.readData((err, data) => {
    if (err) {
      console.error("Error reading data for favlist:", err);
      return res.status(500).send("Error loading favorites list data");
    }
    res.render("store/fav-list", { RegisteredHome: data });
  });
};

module.exports = { home, getBookings, favlist };
