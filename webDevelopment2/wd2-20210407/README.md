# Javascript Recap

## Arrays

1. How could you access the second item, ‘Lion’, in the following code block?
```JS
const animalArray = ['Sloth', 'Lion', 'Chipmunk'];
```
Answer:
```JS
animalArray[1]; // Lion
```

2. What is the purpose of an array?
Answer:
To sore data in an organized fashion.

3. What is the value of `topPriority`?
```JS
const errands = ['Go to the bank', 'Pick up dry cleaning', 'Go grocery shopping'];
const topPriority = errands.indexOf('Pick up dry cleaning');
```
Answer:
```JS
1
```

4. What will be logged to the console when we run the code below?
```JS
const cities = ['Chicago', 'San Francisco', 'New York'];
console.log(cities[3]);
```
Answer:
```JS
undefined
```

5. What will be printed to the console?
```JS
const fruits = ['Apples', 'Oranges', 'Pears', 'Mangos'];
fruits[2] ='Bananas';
console.log(fruits);
```
Answer:
```JS
['Apples', 'Oranges', 'Bananas', 'Mangos']
```

6. Which of the methods below does NOT change the array it is called on?
Answer:
```JS
.slice()
```

7. What will be logged to the console when we run the code below?
```JS
const myArray = ['item 0', 'item 1', 'item 2'];

myArray.push('item 3');
myArray.pop();

console.log(myArray);
```
Answer:
```JS
['item 0', 'item 1', 'item 2']
```

8. What will happen after running the following code?
```JS
const countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
countries.shift();
console.log(countries);
countries = ['England', 'Mozambique', 'Cambodia', 'Peru'];
console.log(countries);
```
Answer:
One array will be logged to the console followed by an error message
```JS
['Denmark', 'Mexico', 'Morocco']
TypeError: Assignment to constant variable
```


## Secret Message

Using array methods, you will transform an array of strings into a secret message!
You should consult the (Mozilla Developer Network:MDN)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array] for reference on any method with
which you are not familiar.

```JS
let secretMessage = ['Learning','is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out', '-2015', 'Chris', 'Pine', 'Learn', 'JavaScript'];
```

1. Use an array method to remove the last string of the array `secretMessage`.
Answer:
```JS
secretMessage.pop();
```

2. Great! You can check your work by logging the `.length` of the array. At this point, the length should be 1 less than the original length.
Answer:
```JS
console.log(secretMessage.length); // 23
```

3. Use an array method to add the words `to` and `Program` as separate strings to the end of the `secretMessage` array.
Answer:
```JS
secretMessage.push(`to`, `Program`);
```

4. Change the word `easily` to the word `right` by accessing the index and replacing it.
Answer:
```JS
secretMessage.splice(7, 1, `right`);
```

5. Use an array method to remove the first string of the array.
Answer:
```JS
secretMessage.shift();
```

6. Use an array method to add the string `Programming` to the beginning of the
array.
Answer:
```JS
secretMessage.unshift(`Programming`);
```

7. Use an array method to remove the strings `get`, `right`, `the`, `first`, `time,`, and replace them with the single string `know,`.
Answer:
```JS
secretMessage.splice(6, 5, 'know');
```

8. On one line, use `console.log()` and `.join()` to print the secret message as a sentence.
Answer:
```JS
console.log(secretMessage.join(' '));
```


## Loops

1. What would the output of this block of code be?
```JS
const animal = 'cat';

for(let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
    for (let j = 1; j < 4; j++) {
        console.log(j);
    }
}
```
Answer:
```JS
c
1
2
3
a
1
2
3
t
1
2
3
```

2. Which statement is true about while loops?
Answer:
`while` loops evaluate a condition for however long it's true and the looping stops when the condition is false.

3. What will be the result of the code block?
```JS
let socialMedia = ['Instagram', 'Facebook', 'Twitter'];

for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
    console.log(socialMedia[socialMediaIndex]);
}
```
Answer:
```JS
'Instagram'
'Facebook'
'Twitter'
```

4. You want to run a code block at least once, then loop as long as a condition remains true.
Which kind of loop would you use?
Answer:
A `do...while` statement

5.What is the general purpose of a loop?
Answer:
Loops automatically iterate a block of code based on conditions.
