// Catch this promise in both .then() way and async await way.
// Console.log() the result or error of this promise. Either the result should give me console


// Create the function that will return a promise
function scaryClown(isScary) {
    return new Promise((resolve, reject) => {
        isScary ? resolve('🤡') : reject('Not scary');
    });
}

// .then
let isScary = true; // Use the promise
scaryClown(isScary).then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error)
    });

// async/await
async function isClownScare() {
    try {
        const res = await scaryClown(true);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
isClownScare();