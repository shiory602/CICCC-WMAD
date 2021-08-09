# Create a Server that hosts just HTTP Sites
1. Create a folder.
2. Create a JS file.
3. Generate package.json

# In JS file
There are mainly three methods to be used in JS file.
## http
Loading `http` object with `require` method.
```js
const http = require('http');
```
This code provides functionality for HTTP access.
HTTP is a protocol (procedure) used for exchanging data on websites.

## createServer
Create a script to create a server object.
The server object is provided as an object called `http.Server`, and the createServer method is used to create this object.
```js
const server = http.createServer((request, response) => {
    Displayed screen
})
```
- request: from client to server
- response: from server to client
In `createServer`, there is a function which is required when the `http.Server` object created by `createServer` is run as a server. When someone accesses that server, this function will be called.
## Listen
The waiting state is done by calling the method "listen" in `http.Server`. It specifies the "listening port number" as an argument.
```js
server.listen(3000, () => {
    `This is host name ${3000}`
})
```

# Generate package.json
The initialization process.
`package.json` will be generated.
### Command.
```
npm init
```
### Displayed content.
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and save it as a dependency in the package.json file.

Press ^C at any time to quit.
Package name: (lab2) 
```
You can generate it by answering the questions.
(It doesn't matter if you don't answer any of them, you can press just `Enter`)

### Questions: 1.
1. name of the package
2. version: Asked if you want to generate the version (1.0.0). 3.
3. summary description 4.
4. file to be initially displayed 5. test command
5. test command
6. initial state of repository information to be saved in Github etc.
7. set keywords to be used when publishing npm
8. author information required when publishing npm
9. Rights information to be applied when npm is released

```
package name: (a) sample
version: (1.0.0) 0.0.0
Description:
entry point: (index.js)
test command:
git repository:
keywords:
author: your name
license: (ISC)
Enter
```

Enter when prompted for ok at the end

``` 
Is this ok? (yes)
```

# Other
Configure the `npm start` script in package.json
### Set up npm start.
After installing package.json, try to run the files and projects using npm.
### Rewrite package.json.
In `start`, put `node the name of the file you want to run`.
```
"scripts": {
    "start": "node filename.js"
}
```
