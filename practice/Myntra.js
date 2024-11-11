const http = require('http')
const server = http.createServer((req , res)=>{
  // console.log(req.url,req.method,req.headers);
  // process.exit();
  if(req.url==='/home'){
    res.setHeader('Contenet-Type' , 'text/html');
  res.write('<html>');
  res.write('<head><title>Node Js</title></head>');
  res.write('<body>welcome To Home</body>');
  res.write('</html>');
  return res.end();
  }
  else if(req.url==='/products') 
    {res.setHeader('Contenet-Type' , 'text/html');
      res.write('<html>');
      res.write('<head><title>Node Js</title></head>');
      res.write('<body>Click here to view products</body>');
      res.write('</html>');
      return res.end()
  }
  {
    res.setHeader('Contenet-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body>hello</body>');
    res.write('</html>');
  }
  
}
)
const port = 3001;
server.listen(port,()=>{
  console.log(` server running at http://localhost:${port}`);
  
})