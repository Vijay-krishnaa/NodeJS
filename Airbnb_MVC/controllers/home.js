const { Home } = require("../models/home_details");

const renderPage = (req, res, view) => {
  Home.readData((err, data) => {
    if (err) {
      console.log(`Error reading data for ${view}:`, err);
      return res.status(500).send(`Error loading data for ${view}`);
    }
    res.render(view, { RegisteredHome: data });
  });
};

const home = (req, res) => renderPage(req, res, "store/home");
const getBookings = (req, res) => res.render(req, res, "store/booking");

const homelist = (req, res) => renderPage(req, res, "store/home-list");
const homedetails = (req, res) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (err, home) => {
    if (!home) {
      res.redirect("/");
    } else {
      console.log(home);
      res.render("store/home-details", { home: home });
    }
  });
};

module.exports = { home, getBookings, homelist, homedetails };
