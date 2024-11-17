const express = require("express");
const path = require("path");
const app = express();
const { contactRoute, registereduser } = require("./routes/contact-us");
const rootDir = require("./utils/util");
const homerouter = require("./routes/home");
app.use(express.urlencoded());
const port = 3000;
app.use(contactRoute);
app.use(homerouter);
app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs"); // Configure EJS as view engine
app.set("views", path.join(__dirname, "views"));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
