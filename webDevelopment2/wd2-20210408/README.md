# Javascript Recap

## Promise
- An **object** which returns some information if the condition in the callback is fulfilled or rejected
- `.then` method and `async/await` is to handle the promises synchronously.
- promise vs async/await --> the only difference is the **syntax** (how pretty we want our code to be), but both do the exact same thing behind the scenes.

JS is by default, kind of **asynchronous** (do stuff at the same time), there are times when we want it not to be doing stuff at the same time. so the solution is **callbacks** (old method), or **promise** (newer method), **async/await** (newest method).
Most other languages are **synchronous**, but JS likes to do things at the same time (asynchronous).

- Synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing.
- Asynchronous code doesn't have to wait – your program can continue to run.


1. What is the value of the argument that is passed to the `onReject()`?
```JS
let onFulfill = value => {console.log(value)};
let onReject = reason => {console.log(reason)};

const promise = new Promise((resolve, reject) => {
    if (false) {
        resolve('success value');
    } else {
        reject();
    }
});

promise.then(onFulfill, onReject);
```
Answer:
```JS
undefined
```

2. Which of the executor function’s parameter is called if the asynchronous task completes successfully?
```JS
const example = new Promise((function1, function2) => {
    . . .
})
```
Answer:
```JS
function1 or function2
```

3. True or False: The `.then()` method returns a Promise.
Answer:
```JS
True
```

4. What value is printed to the console?
```JS
const asyncHello = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hello!');
});
console.log(typeof asyncHello);
```
Answer:
```JS
Object
```

5. True or False: promise1 and promise2 both produce the same output.
```JS
const examplePromise1 = new Promise((resolve, reject) => {reject('Uh-oh!')});
const examplePromise2 = new Promise((resolve, reject) => {reject('Uh-oh!')});

const onFulfill = value => {console.log(value)};
const onReject = reason => {console.log(reason)};

const promise1 = examplePromise1.then(onFulfill, onReject);
const promise2 = examplePromise2.then(onFulfill).catch(onReject);
```
Answer:
True
```JS
"Uh-oh!"
"Uh-oh!"
```

6. True or False: promise1 and promise2 both produce the same output.
```JS
let link = state => {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promiseChain = link(true);

promiseChain
.then( data => {
    console.log(data + '1');
    return link(true);
})
.then( data => {
    console.log(data +'2');
    return link(true);
});
```
Answer:
```JS
success1
success2
```

7. How many parameters does a Promise constructor take?
```JS
const example = new Promise( ??? );
```
Answer:
```JS
1 // one argument(callback) with two parameters(resolve, reject)
```
### Tips
A Promise object is created using the new keyword and its constructor. This constructor takes a function, called the "executor function", as its parameter. This function should take two functions as parameters.


8. Which one of the following is NOT a state that a Promise resolves to?
```JS
Fulfilled // finished
Undefined // not state
Pending // while you are waiting
Rejected // have a problem
```
Answer:
```JS
Rejected
```

9. What state will this promise be in after 0 seconds?
```JS
const examplePromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout( () => resolve('success'), 3000);
        } else {
            setTimeout( () => resolve('failed'), 5000);
        }
    });
};
```
Answer:
```JS
Fulfilled
```