# Create a Server that hosts just JSON Sites
First, for creating server following this [README](../HTTPsite)

## fs object
The object that handles files is called the "File System" object. This is provided in Node.js with an ID of "fs".
For using this object, you can write following code:
```js
const fs = require('fs');
```
Then, load the file
```js
fs.readFile( 'file-path', 'encoding', (error, data) => {
  Process to be executed after readFile is completed.
});
```
Inside of callback function, you can use `response` and `data`.
You can write the data which is read from the file with `write`.
```js
response.writeHead(200, { 'Content-Type': 'application/json'});
response.write(data);
response.end();
```
## Create json object inside of js file.
You can also create json object inside of js file.
1. Create a variable and assign an object.
2. Set variable with `JSON.stringify()` into the `.end` method.
```js
//change the MIME type to 'application/json' 
  res.writeHead(200, {'Content-Type': 'application/json'});
//Create a JSON
let json_response = {
	status : 200 , 
	message : 'successful' , 
	result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
	code : 2000
}
res.end( JSON.stringify(json_response) );
```