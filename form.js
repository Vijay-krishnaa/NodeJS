const http = require('http');
const fs = require('fs');
const { log } = require('console');

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
    else if (req.url.toLocaleLowerCase() === '/form-submit' && req.method==='POST') {
      let body = [];
      req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
      })
      req.on('end'  ,()=>{
        const fullbody = Buffer.concat(body).toString();
        console.log(fullbody);
        const params = new URLSearchParams(fullbody);
        // const bodyObj = {};
        // for(const [key , val] of params.entries()){
        //   bodyObj[key] = val;
       
        //   console.log(bodyObj);
        // }
        // console.log(bodyObj);
        const bodyObj = Object.fromEntries(params)
        console.log(bodyObj);  
        fs.writeFileSync('user.txt' , JSON.stringify(bodyObj))
        
        
      })
    
      res.statusCode= 302;
      res.setHeader('Location','/home')
      
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
