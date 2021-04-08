// Catch this promise in both .then() way and async await way.
// Console.log() the result or error of this promise. Either the result should give me console

function scaryClown(isScary) {
    return new Promise((resolve, reject) => {
        isScary ? resolve('🤡') : reject('Not scary');
    });
}