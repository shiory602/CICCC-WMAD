// 2) Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Notes:
// ● Return 0 if given an empty array.
// ● All array items are of the type bool (true or false).

// 1.配列内の値を判定する
// 2.trueだったらカウントに１を足す

function countTrue (arr) {
	var num = 0;
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] == true) {
			num++;
		}
	}
	return num;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));