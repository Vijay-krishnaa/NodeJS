const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;

const url =
  "mongodb+srv://vijay:vijay7739@vijay.fxic7.mongodb.net/?retryWrites=true&w=majority&appName=vijay";
let _db;
const mongoConnect = (callback) => {
  mongoClient
    .connect(url)
    .then((client) => {
      callback();
      _db = client.db("airbnb");
    })
    .catch((err) => {
      "error to connect with DB", err;
    });
};
const getdb = () => {
  if (!_db) {
    throw new console.error("err in connection");
  } else return _db;
};
module.exports = { mongoConnect, getdb };
