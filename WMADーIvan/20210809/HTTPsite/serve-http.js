// serve-html.js
const http = require('http');

var server = http.createServer(
    (request, response) => {
        // change the MIME type from 'text/plain' to 'text/html'
        response.setHeader('Content-Type', 'text/html');
        response.end('Hello Node.js!');
    }
);

server.listen(3000, console.log('server start!'))