const http = require('http');

const PORT = 3000;
const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.write('Hello!');
  response.end();
});
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});