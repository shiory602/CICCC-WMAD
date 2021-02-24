
// 2) Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]
// Note.
// All arguments must be type Number.
// You can expect negative numbers too.

var result2 = (num) => {
	var arr2 = [];
	if (num % 2 === 0) {
		let half = num / 2;
		arr2.push(half);
		arr2.push(half);
	} else {
		let odd = Math.floor(num / 2);
		arr2.push(odd);
		arr2.push(num - odd);
	}
	return arr2;
}
console.log(result2(4));
console.log(result2(10));
console.log(result2(11));
console.log(result2(-9));



