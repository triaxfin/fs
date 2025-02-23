const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello, World!');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else if (req.url === '/contact') {
    res.end('Contact Page');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});