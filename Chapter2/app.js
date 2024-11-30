const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("This is my homepage");
    return res.end();
  }
  if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("This is my about");
    return res.end();
  }
  if (req.url === "/sign-in") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign-In</title>
</head>
<body>
  <form action="/submit" method="post">

    <input type="text" placeholder="Enter Your UserName" name = "username">
    <input type="password" placeholder="Enter Your Password" name = "password">
    <button type="submit">sign-in</button>
  </form>
</body>
</html>`);
    return res.end();
  }
  if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    fs.writeFileSync("user.txt", "Vijay krishna");
    res.statusCode = 302;

    res.setHeader("Location", "/singin-successfully");
    return res.end();
  }
  if (req.url === "/singin-successfully") {
    res.setHeader("Content-Type", "text/html");
    res.write("You are login successfully");
    res.end();
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
