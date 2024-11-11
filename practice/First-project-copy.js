const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  // Function to render HTML for each page
  const renderPage = (title, message) => {
    res.write('<html>');
    res.write('<head><title>' + title + '</title></head>');
    res.write('<body>');
    res.write('<h1>' + message + '</h1>');
    res.write('<nav>');
    res.write('<a href="/men">Men</a> | ');
    res.write('<a href="/women">Women</a> | ');
    res.write('<a href="/kids">Kids</a> | ');
    res.write('<a href="/cart">Cart</a>');
    res.write('</nav>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  };

  // Routing logic
  if (req.url === '/') {
    renderPage('Myntra', 'Welcome To Myntra');
  } else if (req.url === '/men') {
    renderPage('Men', 'Welcome to the Men Section');
  } else if (req.url === '/women') {
    renderPage('Women', 'Welcome to the Women Section');
  } else if (req.url === '/kids') {
    renderPage('Kids', 'Welcome to the Kids Section');
  } else if (req.url === '/cart') {
    renderPage('Cart', 'Welcome to Your Cart');
  } else {
  
    res.statusCode = 404;
    renderPage('404', 'Page Not Found');
  }
});

const port = 3002;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
