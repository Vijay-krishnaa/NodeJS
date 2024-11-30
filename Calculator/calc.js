const sumRequesthandler = require("./sum");

const requesthandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.write(`<h1>This is Home</h1>
             <a href="/calc">Calc</a>`);
    return res.end();
  }
  if (req.url === "/calc") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<form action="/calc-res" method="POST">
<input type="number" placeholder="enter 1st no" name="first">
  <input type="number" placeholder="enter 2nd no" name="second">
  <button type="submit">add</button>
</form>`);
    return res.end();
  }
  if (req.url === "/calc-res" && req.method === "POST") {
    return sumRequesthandler(req, res);
  }

  res.write(`
        <h1>404 Page Does not Exist</h1>
        <a href="/">Go To Home</a> 
  `);
  return res.end();
};

module.exports = requesthandler;
