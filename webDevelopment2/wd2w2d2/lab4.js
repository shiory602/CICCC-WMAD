
// 4) Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25
// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
// getAbsSum([2, 4, 6, 8, 10]) ➞ 30
// // getAbsSum([-1]) ➞ 1

function getAbsSum (arr) {
	if (arr.length == 1) {
		return Math.abs(arr[0]);
	} else {
		return arr.reduce((a, b) => Math.abs(a) + Math.abs(b));
	}
}

console.log(getAbsSum([2, -1, 4, 8, 10]));
console.log(getAbsSum([-3, -4, -10, -2, -3]));
console.log(getAbsSum([2, 4, 6, 8, 10]));
console.log(getAbsSum([-1]));
