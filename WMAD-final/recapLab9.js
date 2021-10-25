// Objective: In this lab we will start to practice promises and fetch API .

// 1. What are promises? What are the different states of a promise.
// Pending: Initial State, before the Promise succeeds or fails.
// Resolved: Completed Promise.
// Rejected: Failed Promise.

// 2. What are the 2 parameters inside the callback functions that the promise returns?
// resolve and reject

// 3. How do you use promises? Give an example.
// Using .then or Promise chains
// Using async/await

// 4. What is the difference between asynchronous and synchronous?
// The total time is different. Asynchronous is faster because it execute at once.

// 5. How do we catch errors for promises?
// Using .catch

// 6. How do you write a try-catch block?
try {
  // success
} catch (error) {
  // error
}

// 7. Try to convert from .then() => async await
sayPromise().then((say) => {
  console.log(say);
}).catch((error) => {
  console.log(error);
})

async function main() {
  try {
    var say = await sayPromise();
    console.log(say);
  } catch(error) {
    console.log(error);
  }
}

// 8. Give me 2 examples in a project when you want to use promises
// Weather App
// Saving user ID and password

// 9.
// OUTPUT QUESTIONS***************
// 1 ) What is the output of the following code
const promise = new Promise((resolve, reject) => {
reject(Error('Some error occurred'));
})
promise.catch(error => console.log(error.message)); // Some error occurred
promise.catch(error => console.log(error.message)); // Some error occurred

// 2 )
const promise = new Promise((resolve, reject) => {
  reject(Error('Some Error Occurred'));
})
.catch(error => console.log(error))
.then(error => console.log(error));
// having an error

// 3) 
async function func() {
  return 10;
}
console.log(func());
// Promise {<fulfilled>: 10}

// 4) 
async function func() {
  await 10;
}
console.log(func());
// Promise {<pending>}

// 5) 
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}
async function delayedLog(item) {
  await delay();
  console.log(item);
}
async function processArray(array) {
  array.forEach(item => {
    await delayedLog(item);
  })
}
processArray([1, 2, 3, 4]);
// Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules