const { Home, RegisteredHome } = require("../models/home_details");
const fav = require("../models/fav");

const postAddhome = (req, res) => {
  const { houseName, location, price } = req.body;
  const newHome = new Home(houseName, location, price);

  newHome.save((err) => {
    if (err) {
      console.error("Error saving home:", err);
      return res.status(500).send("Error saving home.");
    } else {
      console.log("Home saved successfully");
    }
  });

  res.render("host/thanks", { RegisteredHome });
};

const hosthome = (req, res) => {
  Home.readData((err, data) => {
    if (err) {
      console.error("Error reading data for host home:", err);
      return res.status(500).send("Error loading host home data.");
    }

    res.render("host/edit-home", { RegisteredHome: data });
  });
};

const postAddfav = (req, res) => {
  const homeId = req.body.id;
  fav.addfav(homeId, (err, home) => {
    if (!home) {
      res.redirect("/fav-list");
    } else {
      res.render("/store/fav-list", { home: home });
    }
  });
};

module.exports = { postAddhome, hosthome, postAddfav };
