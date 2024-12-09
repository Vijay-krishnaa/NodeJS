const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
// const upload = multer({ dest: "./assets" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets");
  },
  filename: function (req, file, cb) {
    cb(null, "vicky" + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
app.get("/", (req, res) => {
  res.json("server is running");
});
app.post("/myfile", upload.none(), (req, res) => {
  res.send(req.body);
});
app.post("/image", upload.single("image"), (req, res) => {
  res.send("image uploded successfully");
});

const port = 3002;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
