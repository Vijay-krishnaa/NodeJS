const userModel = require("../models/usermodels");
const path = require("path");
exports.getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
};

exports.createNewUser = (req, res) => {
  const bodyData = req.body;
  let userData = new userModel(bodyData);

  userData
    .save()
    .then(() => res.status(201).send("Data sent successfully"))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.getUser = (req, res) => {
  const { username } = req.query;

  userModel
    .findOne({ username })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.deleteUser = (req, res) => {
  const { username } = req.body;

  userModel
    .deleteOne({ username })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.updateUser = (req, res) => {
  const { username } = req.params;

  userModel
    .updateOne({ username }, req.body)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.getAllUsers = (req, res) => {
  userModel
    .find({})
    .then((users) => res.render("allUsers", { users }))
    .catch((err) => {
      console.error("Error fetching users:", err);
      res.status(500).send({ message: err.message });
    });
};
