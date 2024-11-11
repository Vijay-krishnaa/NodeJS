const sumhandler = (req,res)=>{
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




exports.sumhandler = sumhandler;