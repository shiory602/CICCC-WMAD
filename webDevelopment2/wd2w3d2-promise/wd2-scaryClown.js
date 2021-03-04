// In class assignment 1 (send via slack to teacher)

// Catch this promise in both .then() way and async await way.
// Console.log() the result or error of this promise. Either the result should give me console

// function scaryClown(isScary) {
// 	return new Promise((resolve, reject) => {
// 		isScary ? resolve('🤡') : reject('Not scary');
// 	});
// }




function scary(isScary) {
	return new Promise((resolve, reject) => {
		isScary ? resolve('🤡') : reject('Not scary');
	}).then((message => {
		console.log(message);
	})).catch(error => {
		console.log(error);
	});
}
scary('1');




async function main() {
	try {
		let resolve = await scaryClown();
		console.log(resolve);
	} catch (error) {
		console.log('shows it infinitely ' + error);
	}
}
function scaryAsync(isScary) {
	return new Promise((resolve, reject) => {
		isScary ? resolve('🤡') : reject('Not scary');
	});
}
main('hello 🤡');