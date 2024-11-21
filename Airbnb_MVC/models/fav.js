const fs = require("fs");
const path = require("path");

const favFilePath = path.join(__dirname, "../data/favorites.json");

class Fav {
  static getfav(callback) {
    fs.readFile(favFilePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading favorites:", err);
        callback([]);
      } else {
        callback(JSON.parse(data || "[]"));
      }
    });
  }

  static addfav(homeId, callback) {
    this.getfav((favorites) => {
      if (!favorites.includes(homeId)) {
        favorites.push(homeId);
        fs.writeFile(favFilePath, JSON.stringify(favorites), (err) => {
          callback(err);
        });
      } else {
        callback(null);
      }
    });
  }
}

module.exports = Fav;
