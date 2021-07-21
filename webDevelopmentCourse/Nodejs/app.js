// const http =  require('http') // create an object

// const port = 5050

// const server = http.createServer((req, resp) => {
//     resp.end('hello')
// });

// server.listen(port, () => {
//     console.log(`server is now listening from port ${port}`)
// })


// const http =  require('http') // create an object

// const port = 5050

// const server = http.createServer((req, resp) => {
//     resp.end(
//             `<html>
//                 <head>
//                     <title>First node app</title>
//                 </head>
//                 <body>
//                     <h1>Welcome to my node app</h1>
//                 </body>
//             </html>`
//         )
// });

// server.listen(port, () => {
//     console.log(`server is now listening from port ${port}`)
// })


var http    = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
}).listen(8300);
console.log('Server running');