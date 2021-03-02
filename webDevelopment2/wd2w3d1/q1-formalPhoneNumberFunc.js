// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a
// string of those numbers formatted as a phone number (e.g. (555) 555-5555).


let formalPhoneNumber = (arr) => {
// put out each numbers and place together without comma
	let one = arr.splice(0, 3).join("");
	let two = arr.splice(0, 3).join("");
	let three = arr.splice(0, 4).join("");
// return the numbers
	return `(${one}) ${two}-${three}`;
}

console.log(formalPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formalPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
console.log(formalPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));