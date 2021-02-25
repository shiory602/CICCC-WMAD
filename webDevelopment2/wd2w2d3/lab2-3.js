// 3) Write a function that converts an object into an array of keys and values.
// objectToArray({
// D: 1,
// B: 2,
// C: 3
// }) ➞ [[”D”, 1], [”B”, 2], [”C”, 3]]
// objectToArray({
// likes: 2,
// dislikes: 3,
// followers: 10
// }) ➞ [[”likes”, 2], [”dislikes”, 3], [”followers”, 10]]

// 1.オブジェクトのキーとバリューを１つの配列にする
// 2.ネスト構造の配列を作る

function objectToArray(obj) {
	return arr = Object.entries(obj);
	// return arr = new Map(Object.entries(obj));
}

console.log(objectToArray({
	D: 1,
	B: 2,
	C: 3
	}));

console.log(objectToArray({
	likes: 2,
	dislikes: 3,
	followers: 10
	}));