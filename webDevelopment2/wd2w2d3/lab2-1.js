// 1) A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// NOTE:
// The secret society's name should be entirely uppercased.

// 1.loop through the array -> for(let variable of iterable) = for (let i = 0; i < iterable.length; i++)
// 2.get the first letter of each element -> string.charAt(index)
// 3.add each element into the array -> array.push(element)
// 4.sort them in alphabetical order & convert the array into one string -> array.sort().join('') mean no space

// 
function societyName (arr) {
	var caps = [];
	for (let el of arr) { // 1
		caps.push(el.charAt(0)); // 2,3
	}
	return caps.sort().join(''); // 4
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]));
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));