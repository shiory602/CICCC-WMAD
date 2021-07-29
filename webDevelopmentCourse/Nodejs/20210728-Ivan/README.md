# URL Building
We can define routes, but those are static or fixed.
To use the dynamic routes, we should provide different types of routes.
Using dynamic routes allows us to pass parameters and process based on them.
```js
const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
    res.send('The id you specified is ' + req.params.id);
});

app.listen(3000);
```
To test this go to **http://localhost:3000/123**.
The response is
> The id you specified is 123
***
You can use more than two parameters
```js
const express = require('express');
const app = express();

app.get('/things/:name/:id', (req, res) => {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
app.listen(3000);
```
Now you can test this go to **http://localhost:3000/things/shiori/123**.
The response is
> id: 123 and name: shiori
You can use the `req.params` object to access all the parameters you pass in the url.
***
You can also use regular expression to restrict URL parameter matching.
```js
app.get('/things/:id([0-9]{5})', (req, res) => {
    res.send('id: ' + req.params.id);
});
```
***
If none of your routes match the request, you will get a `Cannot GET <your-request-route>` message as response. This message be replaced by a 404 not found page using this simple route
```js
// Other routes here
app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});
```

# Middleware 
Middleware functions are functions that have access to the **request object (req)**, the **response object (res)**, and the next middleware function in the application's request-response cycle. These functions are used to modify **req** and  **res** objects for tasks like parsing request bodies, adding response headers, etc.
Example of a middleware function in action
```js
const express = require('express);
const app = express();

// Simple request time logger
app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());

    // This function call is very important. It tells that more processing is required for the current request and is in the next middleware
    function route handler.next();
})

app.listen(3000);
```