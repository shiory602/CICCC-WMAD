const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.end(`
                <html>
                    <head>
                        <title>Node app</title>
                    </head>
                    <body>
                        <h1>Welcome to my node app</h1>
                        <h3>${simple.greeting()}!</h3>
                    </body>
                </html>
            `)
            break;
        default:
            res.end(`
                <html>
                    <head>
                        <title>First node app</title>
                    </head>
                    <body>
                        <h1>404 Page not found</h1>
                    </body>
                </html>
            `)
            break;
    }
})

server.listen(port, () => {
    `This is host name ${port}`
})