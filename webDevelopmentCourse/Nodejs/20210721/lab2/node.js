const http = require('http');
const Simple = require('./simple')
const port = 2000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`
        <html>
            <head>
                <title>Simple module</title>
            </head>
            <body>
                <h1>${Simple.Greeting()}</h1>
                <h3>I am Shiori</h3>
            </body>
        </html>
    `);
});

server.listen(port, () => {
    console.log(`Server running port ${port}`);
});
