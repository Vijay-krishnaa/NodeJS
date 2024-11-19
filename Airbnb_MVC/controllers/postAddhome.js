const { Home, RegisteredHome } = require("../models/home_details");

const postAddhome = (req, res) => {
  const { houseName, location, price } = req.body;
  const home = new Home(houseName, location, price);
  home.save();
  res.render("thanks", { RegisteredHome });
};
module.exports = { postAddhome };
