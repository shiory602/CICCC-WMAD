# Regular Expression
Regular Expressions = regex = regexp
- A sequence of characters expressing a pattern for further matching in a longer string.
- It is a Text string to describe a pattern which can be used for searching.
- They are a way to match pattern in the data and extracting the required information out of the data.

## Creating a regular expression
There are two ways for creating an regular expression
### Regular expression literals:
```js
var reg = /ab*/;
```
### Constructor function:
```js
var reg = new RegExp('ab*');
```
Both will match `a`, `ab`, `abb`, `abbbbbbb`, and so on.
But will not match `b`, `bc`, `abc`, `aba`, etc.

## Example
Finding specific text using regular expression
- g: global scope
- i: case insensitive（大文字小文字の区別なし）
- m: multiline match（複数行のマッチ）
