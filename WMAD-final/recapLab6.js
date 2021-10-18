// 1) Given an array of integers nums and an integer target, return array with their indices.
let nums = [2,7,11,15], target = 9 // Expected Output : [0,1]
const getNumTarget = (arr, tar) => {
  for (let i of arr) {
    for (let j of arr) {
      if (arr[i] + arr[j] === tar) {
        return [i, j];
      }
    }
  }
  return "No target";
}

console.log(getNumTarget(nums, target))


// 2) Given a square matrix mat, return the sum of the matrix diagonals. Write a function that returns the sum
// let mat = [[,2,],
//                        [4,,6], 
//                        [,8,]] // Expected output:  25



// 3) Given a string. Count the number of Camel Case characters in it.S = "ckjkUUYII" Expected Output: 5



// 4) Given a string str containing alphanumeric characters. The task is to calculate the sum of all the numbers present in the string.
// str = "1abc23" // Expected Output : 6



// 5) A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"NOTE: The secret society's name should be entirely uppercased.

// 6) Write a function that converts an object into an array of keys and values.
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] 


// NOTE: You cannot use Prebuild Object functions