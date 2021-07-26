const express = require("express")
const app = express()
const port = 3000

// ルーティングの設定
app.get("/", (req, res) => {
    res.send('Hello World :)')
    console.log("We have access to /")
})

// http サーバーの起動
app.listen(port, () => {
    console.log(`Server running at http://${port}/`)
})