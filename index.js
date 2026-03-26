// bridg-it - VoIP service

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('bridg-it VoIP service is running\n');
});

server.listen(PORT, () => {
  console.log(`bridg-it server listening on port ${PORT}`);
});
