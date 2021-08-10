const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./json_response.json', 'UTF-8', (error, data) => {
    res.writeHead(200, { 'Content-Type': 'text/json'});
    res.writeHead(data);
    res.end();
  })
})

server.listen(3000, console.log('server starts'));