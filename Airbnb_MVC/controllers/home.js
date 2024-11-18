const { RegisteredHome } = require(".//postAddhome");
exports.home = (req, res) => {
  res.render("home", { RegisteredHome: RegisteredHome });
};
