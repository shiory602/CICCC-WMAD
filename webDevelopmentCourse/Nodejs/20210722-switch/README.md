1. Create a script to create a server with Node.js
2. Create a package.json file using the command npm init
3. Create the script npm start in your packege.json
4. Install nodemon using npm command  https://www.npmjs.com/package/nodemon
5. Create and exporte a simple module.
6. Create a file and import your module in your new file.
7. Use switch case to create different routes to different pages in your website.

***

# Node.jsを使って簡単なウェブサイトを作る
1. Node.jsでサーバーを生成するスクリプトを作る
2. `npm init`コマンドで package.json を生成する
3. packege.json で `npm start`スクリプトを設定する
4. npmコマンドを使うために[nodemon](https://www.npmjs.com/package/nodemon)をインストールする
5. シンプルなモジュールを生成して`exports`する
6. ファイルを作成して、新しいファイルにインポートする
7. switch caseとroutesを使ってウェブサイト内で異なるページに飛ぶ

## Node.jsでサーバーを生成するスクリプトを作る
`createServer`を使ってサーバーを生成する
```js
const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.end('hello')
    }
})

server.listen(port, () => {
    `This is host name ${port}`
})
```

## `npm init`コマンドで package.json を生成する
詳しくは[こちら](../20210721-exports)

## packege.json で `npm start`スクリプトを設定する
詳しくは[こちら](../20210721-exports)

## npmコマンドを使うために[nodemon](https://www.npmjs.com/package/nodemon)をインストールする
詳しくは[こちら](../20210721-exports)

## シンプルなモジュールを生成して`exports`する
詳しくは[こちら](../20210721-exports)

## ファイルを作成して、新しいファイルにインポートする
詳しくは[こちら](../20210721-exports)

## switch caseとroutesを使ってウェブサイト内で異なるページに飛ぶ


# エラーが出る
## Error: listen EADDRINUSE: address already in use :::3000
### 実行したコマンド
```
node app.js
```
### 出てきたエラー
```
Error: listen EADDRINUSE: address already in use :::3000
```
### 下記コマンドを実行する 
```
npx kill-port 3000
```
これで`node app.js`を実行するとちゃんと作動する

## throw er; // Unhandled 'error' event
> サーバーにリクエストしたけど、エラーが返った時の処理を書いていなかったため、このエラーがでた
[参考サイト](https://gist.github.com/kcpjunky/7963541)

# HTMLコードがそのまま表示される
`writeHead`の第二引数が`plain`になっていた
```
res.writeHead(200, {'Content-Type': 'text/plain'});
```
`text/html`に変更すると文字だけ表示された
```
res.writeHead(200, {'Content-Type': 'text/html'});
```
| コード | 内容 |
| --- | --- |
| Content-Type | コンテンツの種類 |
| text/html | テキストデータでHTML形式のもの |