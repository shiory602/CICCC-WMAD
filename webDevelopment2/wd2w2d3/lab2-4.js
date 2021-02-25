// 4) The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
// Examples
// clone([1, 1]) ➞ [1, 1, [1, 1]]

// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
// cloneArr([1,2,3] => [[1,2,3],[1,2,3]]

// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]

// 1.配列を作る
// 2.コピーを入れ込む ...arr

function cloneArr (clone) {
	return merged = [[...clone], [...clone]];
}

console.log(cloneArr([1, 1]));
console.log(cloneArr([1,2,3]));
console.log(cloneArr(["x", "y"]));