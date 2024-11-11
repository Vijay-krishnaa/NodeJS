const fs = require('fs');
const {sumhandler} = require('../Calculator/sum')

const reqhandler = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write(`
      <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>Welcome to My Calculator</h1>
        <a href="/calc">Calculator</a>
      </body>
      </html>
    `);
    return res.end();
  }

  if (req.url === '/calc' && req.method === 'GET') {
    res.setHeader('Content-type', 'text/html');
    res.write(`
      <html lang="en">
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <form action='/calc-result' method='POST'>
          <input type="text" placeholder="Enter 1st number" name="No1" />
          <input type="text" placeholder="Enter 2nd number" name="No2" />
          <button type="submit">Sum</button>
        </form>
      </body>
      </html>
    `);
    return res.end();
  }

  if (req.url === '/calc-result' && req.method === 'POST') {
    return sumhandler(req,res);

  }
  else {
  
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html');
    res.write(`
      <html>
      <head><title>404</title></head>
      <body><h1>Page Not Found</h1></body>
      </html>
    `);
    return res.end();
  }
}

module.exports = reqhandler;
