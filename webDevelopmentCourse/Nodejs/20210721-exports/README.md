# npm init
初期化処理のこと
`package.json`が生成される。
### コマンド
```
npm init
```
### 表示される内容
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (lab2) 
```
質問に答えていくことで生成できる
（全て無回答`Enter`でも問題はない）

### 質問項目
1. パッケージの名前
2. version: (1.0.0) というバージョンで生成するかと尋ねられている
3. 概要説明
4. 初期表示させるファイル
5. テストコマンド
6. Github等に保存するリポジトリ情報の初期状態
7. npm公開時等で使用されるキーワードを設定
8. npm公開時に必要とされる作者情報
9. npm公開時に適用する権利情報
```
package name: (a) sample
version: (1.0.0) 0.0.0
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: your name
license: (ISC)
```
最後にokかを聞かれるのでエンター
```
Is this ok? (yes) 
```

# npm startの設定
package.jsonをインストールしたらnpmを使用してファイルやプロジェクトを実行してみる
### package.jsonの書き換え
`start`の中には実行したいファイル名を入れる
```
"scripts": {
    "start": "node node.js"
}
```

# nodemonのインストール
```
npm install -g nodemon
```
https://www.npmjs.com/package/nodemon


# require/exports
- require
```
var test = require('./test');
test.a('hello');
test.b('world');
```
- exports
`exports`の方法は二つあるのでどちらかを使う
```
var abc = function(s) {
  console.log(s);
}

module.exports = abc;
```
もしくは
```
exports.abc = function(s) {
  console.log(s);
}

var edf = function(s) {
  console.log(s);
}
exports.edf = edf;
```