const express = require("express");
const path = require("path");
const dbutils = require("./db/dbutils");
const userRouter = require("./router/userRouter");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRouter);
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  dbutils();
});
