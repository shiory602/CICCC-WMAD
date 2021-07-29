# What is Express
**Express** is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**Framework** is an application that has pre-defined functions and designs that are often used during system development. In other words, it allows you to develop web applications more efficiently with shorter programs.
## APIs
With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
## Performance
Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

# How to use Express
To start with, you should have the Node and the npm(node package manager) installed. Confirm that node and npm are installed by running the following commands in your terminal.
```
node -v
npm -v
```
If you already have npm, now we can install Express.
To install Express and add it to our package.json file, use the following command
```
npm install --save express
```
# Using Express
Whenever we create a project using npm, we need to provide a `package.json` file, which has all the details about our project.
1. Start your terminal/cmd, create a new folder named it and cd (create directory) into it
```
$ mkdir node_app
$ cd node_app
```
2. Now to create the package.json file using npm, use the following code.
```
npm init
```
Just keep pressing enter, and enter your name at the "author name" field.
3. Now we have our package.json file set up, we will further install Express.
```
npm install --save express
```
To confirm that Express has installed correctly, run the following code.
### Tip: --save
> Tip − The `--save` flag can be replaced by the `-S` flag. This flag ensures that Express is added as a dependency to our **package.json** file. This has an advantage, the next time we need to install all the dependencies of our project we can just run the command npm install and it will find the dependencies in this file and install them for us.
## Implement in Express
Create a new file called `index.js` and type the following in it.
```js
const express = require('express'); // load
const app = express(); // Prepare to use express

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.listen(3000);
```
Printed:
```
Hello world!
```
## Run Express
Save the file, go to your terminal and type the following.
```
node index.js
```
This will start the server. To test this app, open your browser and go to **http://localhost:3000**.
## How the App Works
Use `listen()` for the value assigned to `express()` instead of `http`.
```js
app.listen(port, [host], [backlog], [callback])
```
## Routing
Web frameworks provide resources such as HTML pages, scripts, images, etc. at different routes. The following function is used to define routes in an Express application.
> app.method(path, handler)
- method: **METHOD** can be applied to any one of the HTTP verbs - get, set, put, delete.
- path: The route at which the request will run.
- handler: A callback function that executes when a matching request type is found on the relevant route.
For example
```js
const express = require('express'); // load
const app = express(); // Prepare to use express

app.get('/hello', (req, res) => {
    res.send("Hello world!");
})

app.listen(3000);
```
If we run our application and go to **http://localhost:3000/hello**, the server receives a get request at route `/hello`, our Express app executes the callback function attached to this route and sends "Hello world!" as the response.
## Create the appearance of the top screen
For the look and feel that will be displayed in the browser, we'll use a file in the format `EJS` (`ejs` is like HTML).
This will be placed in a folder called views and called a view file.
### Display the specified view file in the browser.
``js
res.render('top.ejs')
```
## Use of CSS
> Express stores CSS and images in the public folder.
Use the following code to load files in the public folder
```js
app.use(express.static('public'))
```
***
Reference: [Express](http://expressjs.com/)