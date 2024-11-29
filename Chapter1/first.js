const fs = require("fs");
fs.writeFile("first.txt", "Hello world", (err) => {
  if (err) console.log(err);
  else console.log("write successfully");
});
