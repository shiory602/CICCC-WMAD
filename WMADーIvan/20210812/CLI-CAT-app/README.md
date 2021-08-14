# fs object
The object which manipulate files is called "File System" object.
[File System Module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
### Require fs module
```js
var fs = require('fs');
```

## Read files
Loading the file
```js
fs.readFile( fileName, encoding, function() {} )
```
- The name of the file you load
- encoding
- The function called after finishing `readFile()`

## Create files
- `fs.appendFile()`：Add contents into the file. Create null file if there is no such a file.
arg 1：File name
arg 2：Contents
arg 3：Function
```js
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

- `fs.open()`：If arg2 is "w(writing)", specified file will opened. Create null file if there is no such a file.
```js
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```

- `fs.writeFile()`：Replace files if there is specified file. Create file with contents if there is no such a file.
```js
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

## Update files
- `fs.appendFile()`：Same as above
- `fs.writeFile()`：Same as above

## Delete files
- `fs.unlink()`：Delete specified file
```js
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```

## Rename files
- `fs.rename()`：Replace specified file
```js
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
```

## List files in current directly
- `fs.readdir()`：Read the contents of the directory.
```js
fs.readdir("/", (err, files) => {
  if (err) throw err;
  console.log('Reading the directory...');
  files.forEach((file) => console.log(file));
});
```

## Copy a file to another location
- `copyFile()`：Copy the file and paste the specified place.
```js
fs.copyFile("src", "dest", () => {
  console.log("file was copied");
});
```
@param src — A path to the source file.
@param dest — A path to the destination file.

## Move a file to another location
Asynchronously, Change the path name from `oldPath` to `newPath`. If `newPath` already exist, overwritten. If a directory exists in `newPath`, it is error.
- `fs.rename(oldPath, newPath, callback)`
- [path.join](https://nodejs.dev/learn/the-nodejs-path-module)：join more than two paths.
- `__dirname`：Current directory
```js
const path = require("path")

const currentPath = path.join(__dirname, "mynewfile2.txt")
const newPath = path.join(__dirname, "mynewfile", "new-filename.txt")

fs.rename(currentPath, newPath, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Successfully moved the file!")
  }
})
```

## get info on a file (such as its size_)
- `fs.stat()`：Check the size of the file.
`fs.open()`、`fs.readFile()`、`fs.writeFile()`を呼び出す前に、`fs.stat()`を用いてファイルの存在 を確認することは非推奨。
```js
fs.stat("mynewfile.txt", (error, fileSize) => {
  if (error) throw err;
  console.log("file size", fileSize);
})
```


# Asynchronous and Synchronous
```js
/*--- asynchronous ---*/
fs.writeFile("mynewfile2.txt", "This is replaced by writeFile method.", (err) => {
  if (err) throw err;
  console.log("Create a file2!");
});

/*--- synchronous ---*/
try {
  const data = fs.writeFileSync('./test.txt', 'test');
  console.log('file written successfully');
} catch (err) {
  console.error(err)
}
```


***


2021/08/13

# fs object
ファイルを扱うオブジェクトを「File System」オブジェクトという。
[File System Module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
### require メソッドで使えるようにする
```js
var fs = require('fs');
```

## Read files
ファイルのロード
```js
fs.readFile( fileName, encoding, function() {} )
```
- 読み込むファイルの名前
- ファイルの内容のエンコーディング方式を指定
- readFileが完了した後に実行する処理
**特徴：読み込み終わるまで待たない。**

## Create files
- `fs.appendFile()`：コンテンツをファイルに追加。ファイルが存在しない場合、空のファイルを作成。
第一引数：ファイル名
第二引数：コンテンツ
第三引数：完了したら実行する関数
```js
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

- `fs.open()`：2番目の引数「フラグ」が「w(書き込み)」の場合、指定されたファイルが書き込み用に開かれる。ファイルが存在しない場合、空のファイルを作成。
```js
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```

- `fs.writeFile()`：指定されたファイルとコンテンツが存在する場合は置き換える。ファイルが存在しない場合、コンテンツを含む新しいファイルを作成。
```js
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

## Update files
- `fs.appendFile()`：上記参照
- `fs.writeFile()`：上記参照

## Delete files
- `fs.unlink()`：指定されたファイルの削除
```js
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```

## Rename files
- `fs.rename()`：指定されたファイル名の書き換え
```js
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
```

## List files in current directly
- `fs.readdir()`：ディレクトリの内容を読み込む。引数`files`はディレクトリ内のファイル名の配列で、'.'と'..'は除く。
```js
fs.readdir("/", (err, files) => {
  if (err) throw err;
  console.log('Reading the directory...');
  files.forEach((file) => console.log(file));
});
```

## Copy a file to another location
- `copyFile()`：ファイルをコピーして指定した先にペーストする。
```js
fs.copyFile("src", "dest", () => {
  console.log("file was coppied");
});
```
@param src — A path to the source file.
@param dest — A path to the destination file.

## Move a file to another location
非同期的に、`oldPath`にあるファイルの名前を`newPath`に指定されたパス名に変更。すでに`newPath`が存在する場合は、上書き。`newPath`にディレクトリが存在する場合、エラーが発生。
- `fs.rename(oldPath, newPath, callback)`
- [path.join](https://nodejs.dev/learn/the-nodejs-path-module)：二つ以上の値をつなげたパスにする
- `__dirname`：現在のディレクトリのパスを示す特別な変数
```js
const path = require("path")

const currentPath = path.join(__dirname, "mynewfile2.txt")
const newPath = path.join(__dirname, "mynewfile", "new-filename.txt")

fs.rename(currentPath, newPath, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Successfully moved the file!")
  }
})
```

## get info on a file (such as its size_)
- `fs.stat()`：ファイルのサイズを確認する
`fs.open()`、`fs.readFile()`、`fs.writeFile()`を呼び出す前に、`fs.stat()`を用いてファイルの存在 を確認することは非推奨。
```js
fs.stat("mynewfile.txt", (error, fileSize) => {
  if (error) throw err;
  console.log("file size", fileSize);
})
```


# Asynchronous and Synchronous
どちらも指定した名前（第一引数）でファイルを作成
```js
/*--- asynchronous ---*/
fs.writeFile("mynewfile2.txt", "This is replaced by writeFile method.", (err) => {
  if (err) throw err;
  console.log("Create a file2!");
});

/*--- synchronous ---*/
try {
  const data = fs.writeFileSync('./test.txt', 'test');
  console.log('file written successfully');
} catch (err) {
  console.error(err)
}
```