const express = require("express");
const path = require("path");
const homeRouter = require("./routes/home");
const registerRouter = require("./routes/register");
const successfullRoute = require("./routes/submitsuccessful");
const ErrRouter = require("./routes/404");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(homeRouter);
app.use(registerRouter);
app.use(successfullRoute);
app.use(ErrRouter);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`port is running on http://localhost:${port}`);
});
