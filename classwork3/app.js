const express = require("express");
const multer = require("multer");
const app = express();
app.use(express.json());
// const upload = multer({ dest: "./assets" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.get("/", (req, res) => {
  res.send("server is running");
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
