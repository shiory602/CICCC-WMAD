const http = require('http')

const port = 3030

const server = http.createServer((req, resp) => {
    resp.end(
        `<html>
            <head>
                <title>Lab 1</title>
            </head>
            <body>
                <h1>WMAD</h1>
                <p>This is my first  node server!</p>
            </body>
        </html>`
    )
});

server.listen(port, ()=> {
    console.log("This is my first  node server!")
})