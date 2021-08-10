# Create a Server that hosts just JSON Sites
First, for creating server following this [README](../HTTPsite)

### fs object
The object that handles files is called the "File System" object. This is provided in Node.js with an ID of "fs".
For using this object, you can write following code:
```js
const fs = require('fs');
```
Then, load the file
```js
fs.readFile( 'file-name', 'encoding', 'function' );
```
1.