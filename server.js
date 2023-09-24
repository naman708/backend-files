const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-Type', 'text/plain');

  // Define custom responses based on the URL
  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node.js project');
  } else {
    // Handle other URLs with a 404 response
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 4000; 
server.listen(port, () => {

});
