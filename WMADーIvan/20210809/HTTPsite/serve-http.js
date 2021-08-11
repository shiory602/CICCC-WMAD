//simple-server-in-nodejs.js
var http = require('http');
const fs = require('fs');

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) => {
    // change the MIME type from 'text/plain' to 'text/html'
    response.writeHead(200, {'Content-Type': 'text/html'});
    //reading the content file
    fs.readFile('index.html', (err, data) => {
        // checking for errors
        if (err)
            throw err;
        console.log("Operation Success");
        // sending the response
        response.end(data);
    });
});

server.listen(port, host, (error) => {
    if (error) {
        return console.log('Error occured : ', error );
    }
    console.log('server is listening on ' + host + ':'+ port);
});