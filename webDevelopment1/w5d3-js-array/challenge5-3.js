// Shiori Suzuki  WMAD afternoon class

// 1) Create a function that takes two numbers as arguments and return their sum.

function addition(arg1, arg2) {
	return arg1 + arg2;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

// 2) Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function additionOne(arg) {
	return arg += 1;
}
console.log(additionOne(0));
console.log(additionOne(9));
console.log(additionOne(-3));

// 3) Write a function that takes an integer minutes and converts it to seconds.

function convert(arg) {
	return arg * 60;
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

// 4) Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

let array = [];
function arrayOfMultiples(num, length) {
	for (let i = 0; i < length; i++) {
		array.push(num * (i + 1));
	}
	return array;
}
// another solution
function arrayOfMultiples(num, length) {
	let array = [];
	for (let i = 1; i <= length; i++) {
		array.push(num * i);
	}
	return array;
}
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

// 5) Write a function that converts an object into an array, where each element represents a key-value pair.

let ex1 = {
	a: 2,
	b: 5
};
let ex2 = {
	shrinmp: 15,
	tots: 12
};

function toArray(arr) {
	var objectToArray = Object.entries(arr)
	return objectToArray;
}
console.log(toArray(ex1));
console.log(toArray(ex2));