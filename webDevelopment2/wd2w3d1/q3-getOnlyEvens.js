// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

let getOnlyEvens = (v)=> {
let result = v.filter((even, index) => {
	return even % 2 === 0 && index % 2 === 0;
})
return result;
};

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));