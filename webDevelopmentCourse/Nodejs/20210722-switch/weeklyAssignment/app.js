const http = require('http'); // httpオブジェクトのロード
const content1 = require('./content1');
const content2 = require('./content2');
const server = http.createServer(); // http.Serverオブジェクトを作成
server.on('request', doRequest); // onメソッドは、指定のイベント処理を組み込む、第一引数にイベント名、第２引数に組み込む処理（関数）を指定
server.listen(3000, () => {
    console.log(`Server running port 3000`);
})

// リクエストの処理
function doRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url) {
        case '/':
            res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta http-equiv="content-type"
                        content="text/html; charset=UTF-8">
                    <title>Node switch</title>
                    <style>
                        body { font-size:12pt; color:#006666; }
                        h1 { font-size:18pt; background-color:#AAFFFF; }
                        pre { background-color:#EEEEEE; }
                    </style>
                </head>
                <body>
                    <div role="main">
                        <p>${content1.sample1()}</p>
                    </div>
                </body>
                </html>
            `);
            break;
        case '/other':
            res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta http-equiv="content-type"
                        content="text/html; charset=UTF-8">
                    <title>Node switch</title>
                    <style>
                        body { font-size:12pt; color:#006666; }
                        h1 { font-size:18pt; background-color:#AAFFFF; }
                        pre { background-color:#EEEEEE; }
                    </style>
                </head>
                <body>
                    <div role="main">
                        <p>${content2.sample2()}</p>
                    </div>
                </body>
                </html>
            `);
            break;
        default:
            res.end(
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
}