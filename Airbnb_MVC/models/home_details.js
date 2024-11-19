const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/utils");
let RegisteredHome = [];

class Home {
  constructor(houseName, location, price) {
    this.houseName = houseName;
    this.location = location;
    this.price = price;
  }

  save(callback) {
    const homepath = path.join(rootDir, "data", "home.json");
    fs.readFile(homepath, "utf-8", (err, data) => {
      RegisteredHome = !err && data.length > 0 ? JSON.parse(data) : [];
      RegisteredHome.push(this);
      fs.writeFile(homepath, JSON.stringify(RegisteredHome), callback);
    });
  }

  static readData(callback) {
    const filepath = path.join(rootDir, "data", "home.json");
    fs.readFile(filepath, "utf-8", (err, data) => {
      RegisteredHome = !err && data.length > 0 ? JSON.parse(data) : [];
      callback(err, RegisteredHome);
    });
  }
}

module.exports = { RegisteredHome, Home };
