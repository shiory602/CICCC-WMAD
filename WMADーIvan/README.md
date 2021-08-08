# small test
***

## Explain equality in JavaScript, show an example
You can use "==" for insist equality in JavaScript like "1 == string".
You can also use "===" which is more strict equality. If you code "1 === string", this is FALSE because 1 is NUMBER. You need to code "1 === number" or "'1' === string" for the answer TRUE.

## Explain meta tags in HTML
`<meta>` tag is inside of `<head>` tag. It is a setting definition for the page.
Explain the three main ways to apply CSS styles to a web pageEntry
1. Inline CSS:  write directly inside of specific tag
style="property: value;"
2. Internal CSS:  write directly inside of head tag
```html
<style>
  { property: value; }
</style>
```
3. External CSS:  create another css file and write this inside of head tag
```html
<link rel="stylesheet" href="file-name.css">
```
## What is CSS?
CSS is a language to be used when we style an HTML document.
## What is Git?
Git is a version control system.
## What is Node.js?
Node.js is an platform for developing server app in the JavaScript language.
## What is SQL injection?
According to Google search, SQL injection is something bad thing or the bad condition of security. It is one of the most common web hacking techniques.
## What is Scope in JavaScript?
Scope determines the accessibility of variables. JS has Block scope, Function scope, and Global scope.
## What is meant by Continuous Integration?
CI is a method which is for find problems and change the development better continuously and automatically.
## What is npm?
Node package manager. It puts modules, so that node can find them.
## How do you install a package with NPM?
Command "npm i ---" or "npm install ---" in the terminal.
## What does the -G switch do in npm?
-G means global. If you use global, the package would be in node_modules folder of root.
## What is the node REPL
REPL is node one of modules. 
## Describe floats and how they work
I read the link which you sent but could not understand. For me, floats is not an integer.
## What is a realm number?
Real number is all numbers.
## What is an imaginary number?
Not real number and the number which can be divide with that number.
## Describe what User Interface (UI) Design does mean for you?
User Interface is the design of the web page which users can see.
Explain event bubbling and how one may prevent it
The event continues to happen again and again.
## Explain the CSS “box model” and the layout components that it consists of
CSS"box model" is used when manipulating the design and layout like margin, padding, and border things.
## Given a string, "Hello Javascript" how would you reverse it?
I tried following code, but actually I have errors.
```js
let a = "Hello Javascript";
let b = a.reverse().split().join("");
console.log(b)
```
## How Can I Get Indexed Better by Search Engines?
Maybe you can use HTML tags properly like <main>, <nav>, <footer>, and others.
## What does use strict do?
When you use strict, the coding rule would be more strict.
## What is Cross Site Scripting (XSS)?
It is a type of injection. Someone go into your computer.
## What is DOM (Document Object Model) and how is it linked to CSS?
It has a tree structure. I don't know how to link to CSS... maybe use @import
## What is Sass?
Sass is the framework of CSS. More useful and easy to link files.
## What is a Polyfill?
polyfill helps old browsers to be used.
## What is global installation of dependencies?
If you install with globally, it allows you to use the package as a tool anywhere on the local computer.
## What is impersonation?
Used for saving security. Running a program in the security context of a different user compare with the one used by the primary token.
## What is the difference between span and div?
`<span>` is inline tag and `<div>` is block tag.
## You need to update your local repos. What git commands will you use?
git add . > git commit -m "message" > git push
## Could you explain the Gitflow workflow?
There are six branches: master, develop, feature, release, and hotfix.
- Master(main) branch is only used to be merged.
- Develop branch is the main branch for development.
- Feature branch is used to add or change features. Branching off of develop as their parent, and merged back into develop.
- Release branch is branched off from develop branch and merge into master and develop branch.
- Hotfix branch is used fix problems of release. this branch is similar to release branches.
## Describe Closure concept in JavaScript as best as you could
Closure is a function which refer to the value outside of it.
## Explain the difference between undefined and not defined in JavaScript
undefined: a variable is declared but there is no value inside.
for example
```js
var value;
console.log(value). // undefined
```
not defined: a variable is not declared.
for example
```js
console.log(value); // Uncaught ReferenceError: value is not defined
```
## Explain the difference between cookies, session and local storage
Cookies remember the key of Session. Session is data in the server. Local Storage is similar to Session.
## Given two strings, write a function that return true if they are anagrams of one another
```js
(function (a, b) {
  a.split().filter(v, () => {
    b.split().
  })
})()
```
## How to compare two objects in JavaScript?
We have to first stringify the object and then use equality operators.
https://www.tutorialspoint.com/how-to-compare-two-objects-in-javascript
## What do you know about serverless model?
SAM is an open source model for arch serverless app. You can call functions, API, and DB with very simple code.
## What is CSS preprocessor and why to user one?
CSS preprocessor makes CSS more efficient to write.
It is reusable and useful.
## What is the purpose of cache busting and how can you achieve it?
If the URL of a static file is different from the cached one, the browser will get the file from the server without using the cache. Therefore, you can prevent the browser from reading the cache by updating the query parameters as the file is updated. This method is called Cache Busting.