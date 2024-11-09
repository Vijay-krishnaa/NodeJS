const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body>Welcome To Home</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body>Click here to view products</body>');
    res.write('</html>');
    return res.end();
  } 
  else if (req.url === '/form') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body><h1>Enter Details</h1>');
    res.write('<form action="/form-submit" method="POST">');
    res.write('<input type="text" placeholder="Enter Your Name" name="username" /></br>');
    res.write('<label >Gender</label>');
    res.write('<input type="radio" name="gender" id="male" value="male" /> male');
    res.write('<input type="radio" name="gender" id="female" value="female" /> female </br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
    else if (req.url.toLocaleLowerCase === '/form-submit' && req.method==='POST') {
      fs.writeFileSync('user.txt' , 'Vijay Krishna')
      res.statusCode= 302;
      res.setHeader('Location','./home')
      
      return res.end();
    
    
  } else {
    res.statusCode=404;
    return res.end();
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
