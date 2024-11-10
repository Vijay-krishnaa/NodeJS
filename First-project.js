const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
if(req.url ==='/'){
res.setHeader('Content-Type','text/html')
res.write('<html>')
res.write('<head>')
res.write('<title>Mynta</title>')
res.write('</head>')
res.write('<body>')
res.write('<h1>Welcome To Myntra</h1>')
res.write('<nav>')
res.write('<a href="./men">Men</a>')
res.write('<a href="./women">Women</a>')
res.write('<a href="./kids">Kids</a>')
res.write('<a href="./carts">Carts</a>')
res.write('</nav>')
res.write('</body>')
res.write('</html>')
return res.end();
}
else if(req.url==='/men'){
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
res.write('<head>')
res.write('</head>')
res.write('<body>')
res.write('<h1>Welcome to Men</h1>')
res.write('</body>')
res.write('</html>')
return res.end();

}
else if(req.url==='/women'){
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
res.write('<head>')
res.write('</head>')
res.write('<body>')
res.write('<h1>Welcome to Women</h1>')
res.write('</body>')
res.write('</html>')
return res.end();

}



else if(req.url==='/kids'){
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
res.write('<head>')
res.write('</head>')
res.write('<body>')
res.write('<h1>Welcome to Kids</h1>')
res.write('</body>')
res.write('</html>')
return res.end();

}
else 
 res.setHeader('Content-Type','text/html')
res.write('<html>')
res.write('<head>')
res.write('</head>')
res.write('<body>')
res.write('<h1>Welcome to Cart</h1>')
res.write('</body>')
res.write('</html>')
return res.end();

})
const port = 3002;
server.listen(port,()=>{
  console.log(`servver is running at http://localhost:${port}`);
  
})