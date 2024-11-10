const fs = require('fs');

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
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      
      const params = new URLSearchParams(fullbody);
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      
      const sum = Number(bodyObj.No1)+ Number(bodyObj.No2);

      res.setHeader('Content-type', 'text/html');
      res.write(`
        <html lang="en">
        <head>
          <title>Result</title>
        </head>
        <body>
          <h1>Result: ${sum}</h1>
          <a href="/calc">Back to Calculator</a>
        </body>
        </html>
      `);
      return res.end();
    });
  }
};

module.exports = reqhandler;
