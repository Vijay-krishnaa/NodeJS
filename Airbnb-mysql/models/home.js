const db = require("../utils/dbutils");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  save() {
    if (this.id) {
      return db.execute(
        "UPDATE  homes SET houseName=?, price=?, location=?, rating=?,photoUrl=?, description=? WHERE id=?",
        [
          this.houseName || null,
          this.price || null,
          this.location || null,
          this.rating || null,
          this.photoUrl || null,
          this.description || null,
          this.id || null,
        ]
      );
    } else {
      return db.execute(
        "INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)",
        [
          this.houseName || null,
          this.price || null,
          this.location || null,
          this.rating || null,
          this.photoUrl || null,
          this.description || null,
        ]
      );
    }
  }

  static fetchAll(callback) {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id=?", [homeId]);
  }

  static deleteById(homeId) {
    return db.execute("DELETE  FROM homes WHERE id=?", [homeId]);
  }
};
