// Write a function that takes an array as a parameter and returns true if a value is repeated twice or more, else returns false
// Does the following array contains a duplicate
let array = [1,4,2,11,1,4,5];  // Expected Output -  true
const checkDuplicates = (arr) => {
  return (new Set(arr).size) !== arr.length;
}
console.log(checkDuplicates(array))



// Write a function that takes in an array, and returns an object having keys as the  array items with their counts
// For given array, return an object with numbers and their counts
let array = [1, 4, 22, 1, 0, 22, 4, 1]; // Expected Output : { 1: 3, 4: 2, 22: 2, 0: 1}
const countsDuplicates = (arr) => {
  const counts = {};
  arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
};
console.log(countsDuplicates(array));




// Write a function that returns a new array/same array after removing Duplicates from an array
let array = [1, 4, 22, 1, 0, 22, 4, 1]; // Expected Output: [1,4,22,0]; // order can change
const removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};
console.log(removeDuplicates(array));




// Write a function that returns a the missing integer, provided a given array
let array = [1, 2, 3, 4, 6, 7, 8, 9, 10]; // Expected Output: 5
let len = array.length;
const getMissingNumber = (arr, l) => {
  let total = Math.floor(((l + 1) * (l + 2)) / 2);
  for (let i = 0; i < l; i++) {
    total -= arr[i];
  }
  return total;
};
console.log(getMissingNumber(array, len));



// Write a function that returns smallest and largest in an array
let array = [1,11,-20,5,25,0, 3]; // Expected output [-20, 25]
const smallestLargest = (arr) => {
  return [Math.min(...arr), Math.max(...arr)]
}
console.log(smallestLargest(array));




// Write a function that Reverses an array without using Es6 Reverse Method
let array = [1,2,3,4] // -->Expected Output [4,3,2,1]
const ReverseArray = (arr) => {
  return arr.sort((a, b) => b - a); // is for number
}
console.log(ReverseArray(array));