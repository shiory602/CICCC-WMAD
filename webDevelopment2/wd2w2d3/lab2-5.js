// 5) Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

// Notes:
// ● Tests contain arrays with both strings and numbers.
// ● Tests are case sensitive. 大文字と小文字を区別
// ● Each array item is unique. 重複排除

// 1.重複を無くしてArrayオブジェクトに変換
// 2.Array.fromで配列に変換

function removeDups(arr) {
	var set = new Set(arr);	// 1
	return Array.from(set); // 2
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));