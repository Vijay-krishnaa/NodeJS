const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/utils");
const filepath = path.join(rootDir, "data", "home.json");
let RegisteredHome = [];

class Home {
  constructor(houseName, location, price) {
    Object.assign(this, { houseName, location, price });
  }

  save(callback) {
    this.id = Math.random().toString();
    fs.readFile(filepath, "utf-8", (err, data) => {
      RegisteredHome = !err && data.length > 0 ? JSON.parse(data) : [];
      RegisteredHome.push(this);
      fs.writeFile(filepath, JSON.stringify(RegisteredHome), callback);
    });
  }

  static readData(callback) {
    fs.readFile(filepath, "utf-8", (err, data) => {
      RegisteredHome = !err && data.length > 0 ? JSON.parse(data) : [];
      callback(err, RegisteredHome);
    });
  }
  static findById(homeId, callback) {
    this.readData((err, homes) => {
      if (err) return callback(err, null);
      callback(null, homes.find((home) => home.id === homeId) || null);
    });
  }
}

module.exports = { RegisteredHome, Home };
