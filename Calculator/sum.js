const sumRequesthandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodystr = Buffer.concat(body).toString();
    console.log(bodystr);
    const bodyObj = Object.fromEntries(new URLSearchParams(bodystr));
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    res.setHeader("Content-Type", "text/html");
    res.write(`
       <h1>The Sum of Number is ${result}</h1>
      `);
    return res.end();
  });
};
module.exports = sumRequesthandler;
