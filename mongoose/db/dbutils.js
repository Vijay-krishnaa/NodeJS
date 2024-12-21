const mongoose = require("mongoose");

const dbutils = () => {
  const dburl = "mongodb://127.0.0.1:27017/myserver";

  mongoose
    .connect(dburl)
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log("Error in Connection:", err));
};

module.exports = dbutils;
