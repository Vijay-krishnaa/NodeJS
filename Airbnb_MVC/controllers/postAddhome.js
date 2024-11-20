const { Home, RegisteredHome } = require("../models/home_details");

const postAddhome = (req, res) => {
  const { houseName, location, price } = req.body;
  const home = new Home(houseName, location, price);
  home.save((err) => {
    if (err) {
      console.log("Error saving home:", err);
    } else {
      console.log("Home saved successfully");
    }
  });
  res.render("host/thanks", { RegisteredHome });
};
const hosthome = (req, res) => {
  Home.readData((err, data) => {
    if (err) {
      console.error("Error reading data for favlist:", err);
      return res.status(500).send("Error loading favorites list data");
    }
    res.render("host/edit-home", { RegisteredHome: data });
  });
};

module.exports = { postAddhome, hosthome };
