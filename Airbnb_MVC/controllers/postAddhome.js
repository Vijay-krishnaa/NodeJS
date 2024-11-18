const RegisteredHome = [];
const postAddhome = (req, res) => {
  RegisteredHome.push(req.body);
  res.render("thanks", { RegisteredHome });
};
module.exports = { postAddhome, RegisteredHome };
