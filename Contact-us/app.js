const express = require("express");
const path = require("path");
const app = express();
const contactRoute = require("./routes/contact-us");
const rootDir = require("./utils/util");
app.use(express.urlencoded());
const port = 3000;
app.use(contactRoute);
app.use(express.static(path.join(rootDir, "public")));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
