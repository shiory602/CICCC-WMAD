// Catch this promise in both .then() way and async await way.
// Console.log() the result or error of this promise. Either the result should give me console

function scaryClown(isScary) {
    return new Promise((resolve, reject) => {
        isScary ? resolve('🤡') : reject('Not scary');
    });
}

// let isScary = true;
// scaryClown(isScary).then(resolve => console.log(resolve))
// .catch(reject => console.log(reject));

scaryClown().then(() => {
        resolve('🤡');
    })
    .catch(() => {
        reject('Not scary');
    });

// async function main(){
//     try{
//          var clown = await scaryClown(isScary);
//         console.log(await scaryClown(isScary));
//     }catch(error){
//         console.log(error);
//     }
// }
// main();

async function scaryClown() {
    try {
        const isScary = await resolve('🤡');
        console.log(isScary);
    } catch (error) {
        reject('Not scary');
    }
}