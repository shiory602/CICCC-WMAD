const http =  require('http') // create an object
const time = require('./dataTime');
const port = 3000

const server = http.createServer((req, resp) => {
    switch(req.url) {
        case '/':
            resp.end(
                `<html>
                <head>
                <title>First node app</title>
                </head>
                <body>
                <h1>Welcome to my node app</h1>
                <h3>Today is ${time.myDateTime()}</h3>
                </body>
                </html>`
        )
        break;
        case '/admin':
        resp.end(
            `<html>
            <head>
            <title>First node app</title>
            </head>
            <body>
            <h1>Welcome to admin app</h1>
            </body>
            </html>`
        )
        break;
        case '/student':
        resp.end(
            `<html>
            <head>
            <title>First node app</title>
            </head>
            <body>
            <h1>Welcome to student app</h1>
            </body>
            </html>`
        )
        break;
        default:
            resp.end(
                `<html>
                <head>
                <title>First node app</title>
                </head>
                <body>
                <h1>404 Page not found</h1>
                </body>
                </html>`
                )
    }
});

server.listen(port, () => {
    console.log(`server is now listening from port ${port}`)
})
