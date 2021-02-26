// 2) Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Notes:
// ● Return 0 if given an empty array.
// ● All array items are of the type bool (true or false).

// 1.declare a variable and set count 0
// 2.loop through the array and count it if element = true -> for(let element of arr) {if(element === true) {num++;}}

function countTrue (arr) {
	var num = 0; // 1
	for (let i of arr) {
		if(i == true) {
			num++;
		}
	}
	return num;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));