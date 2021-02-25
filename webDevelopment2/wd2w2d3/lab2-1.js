// 1) A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// NOTE:
// The secret society's name should be entirely uppercased.

// 1.頭文字を抜き出すcharAt()
// 2.アルファベット順に表示 sort()
// 3.大文字に変換 toUpperCase()

function societyName (arr) {
	var result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i].charAt(0));
	}
	result.sort();
	return result.join();
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]));
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));