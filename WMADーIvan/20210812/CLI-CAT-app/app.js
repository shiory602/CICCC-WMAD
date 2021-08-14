const express = require("express");
const app = express();

const fs = require("fs");

/*---------------
load a file
---------------*/
  fs.readFile('./file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('load a file!')
  console.log(data) // print "test" in file.txt
});

/*---------------
create a file
---------------*/
fs.open('mynewfile1.txt', 'w', function (err) {
  if (err) throw err;
  console.log('Create a file1!');
});

/*---------------
create a file
update a file (hole contents)
---------------*/
/*--- asynchronous ---*/
fs.writeFile("mynewfile2.txt", "This is replaced by writeFile method.", (err) => {
  if (err) throw err;
  console.log("Create a file2!");
});

/*--- synchronous ---*/
// try {
//   const data = fs.writeFileSync('./test.txt', 'test');
//   console.log('file written successfully');
// } catch (err) {
//   console.error(err)
// }

/*---------------
create a file
update a file (add contents)
---------------*/
fs.appendFile("mynewfile3.txt", "test3", (err) => {
  if (err) throw err;
  console.log("file was appended");
});

/*---------------
Rename a file
---------------*/
fs.rename("mynewfile1.txt", "myrenamedfile.txt", () => {
  console.log("file was renamed");
});

/*---------------
Delete a file
---------------*/
fs.unlink("test.txt", (err) => {
  if (err) throw err;
  console.log('File deleted!');
});

/*---------------
List files in current directly
---------------*/
fs.readdir("/", (err, files) => {
  if (err) throw err;
  console.log('Reading the directory...');
  files.forEach((file) => console.log(file));
});


/*---------------
copy a file to another location
(hole contents)
---------------*/
fs.copyFile("mynewfile1.txt", "mynewfile2.txt", () => {
if (err) throw err;
  console.log("file was copied!");
});


/*---------------
move a file to another location
---------------*/
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

/*---------------
get info on a file (such as its size_)
---------------*/
fs.stat("mynewfile.txt", (error, fileSize) => {
  if (error) throw err;
  console.log("file size", fileSize);
})

app.listen(3000);