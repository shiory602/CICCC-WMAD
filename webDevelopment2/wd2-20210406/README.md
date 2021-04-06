# Javascript Test

Just a quick test to test your javascript understanding.

1. What is ES6?

   - ES6 is also known as ECMAScript 6 and ECMAScript 2015.
   - ES6 was the second major revision to JavaScript.

2. Name 3 examples of ES6 feature.

   1. arrow functions
   2. let / const keyword
   3. The for / of loop

3. What is the difference between let and const?

   - let -> can be changed
   - const -> cannot be changed

4. How do you access object values? Give 3 examples

   1. Dot property accessor: `object.property`
   2. Square brackets property access: `object['property']`
   3. Object destructuring: `const { property } = object`

5. What does setInterval and setTimeout do?

   - `setTimeout(function, milliseconds)` Executes a function, after waiting a specified number of milliseconds.
   - `setInterval(function, milliseconds)` Same as `setTimeout()`, but repeats the execution of the function continuously.

6. What are promises?

   - the Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

7. Convert this async function to async/await
   async function (.then)

```JS
getQuote().then((quote) => {
	console.log(quote);
}).catch(function (error) {
	console.log(error);
});
```

async/await

```JS
async function main() {
	try {
		var quote = await getQuote();
		console.log(quote);
	}
} catch(error) {
	console.log(error);
};
```

8. Convert this code to arrow function.

```JS
function greeting(firstname, lastname) {
	return `Hi, ${firstname} ${lastname}`;
}
```

arrow function

```JS
const greet = greeting(firstname, lastname) => `Hi, ${firstname} ${lastname}`;
```

9. Explain what a callback function is.

   - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

10. What does the functions pop and push do to an array?

    - pop(): removes the last element from an array and returns that element. (mutable)
    - push(): adds one or more elements to the end of an array and returns the new length of the array. (mutable)

11. What is the expected answer to this code?

```JS
var string1 = "";
var object1 = {a:1, b: 2, c: 3};

for (var property1 in object1) {
	string1 += object1[property1];
}

console.log(string1);
```

Expected answer is

```JS
// 123
```

12. What data type would Array.map() and Array.filter() return?

    - array

13. What data type would Array.includes() and Array.some() return?

    - boolean

14. Write down the 4 main methods of rest api

    1.  GET -> reads the data
    2.  PUT -> creates data
    3.  POST -> updates data
    4.  DELETE -> deletes data

15. What is the difference between JSON and JavaScript object?

    - Objects and Arrays
      Property names must be double-quoted strings in JSON.
    - Numbers
      Leading zeros are prohibited. A decimal point must be followed by at least one digit. NaN and Infinity are unsupported.

16. Explain what API is

- API is a set of protocols and is deployed over the software to help it interact with some other software.

17. What is an api key?

    - An API key or application programming interface key is a code that gets passed in by computer applications. The program or application then calls the API or application programming interface to identify its user, developer or calling program to a website.

18. Let's say we have query params that we want to include in an api call.
    example: { a: 1, b: 2 } How do we convert this into query-string?

```JS
var params = { a: 1, b: 2 }
var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
```

19. What do we send in the body(data) of rest api?
    - Contains information you want to be sent to the server or store in the database. This option is only used with POST and PUT requests.
