const fs = require("fs");

const requesthandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<form action="/form-submit" method="POST">

<input type="text" placeholder="Enter Your name" name = name>

<label for="male">Male</label>
<input type="radio" id="male" name = "gender" value="male">
<label for="male">female</label>
<input type="radio" id="female" name = "gender" value="female">
<button type="submit">submit</button>
</form>`);
    res.end();
  }
  if (req.url === "/form-submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      const bodyObj = Object.fromEntries(new URLSearchParams(fullbody));
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj));
      res.setHeader("Content-Type", "text/html");
      res.write(`<h1>Form submitted successfully!</h1>`);
      res.end();
    });
  }
};
module.exports = requesthandler;
