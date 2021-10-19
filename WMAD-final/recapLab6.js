// 1) Given an array of integers nums and an integer target, return array with their indices.
let nums = [2,7,11,15], target = 9 // Expected Output : [0,1]
const getNumTarget = (arr, tar) => {
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === tar) {
        return [i, j];
      }
    }
  }
  return "No target";
}

// console.log(getNumTarget(nums, target));

// const twoSum = (arr, target) => {
//   let numObject = {};
//   for (let i = 0; i < arr.length; i++) {
//     let thisNum = arr[i];
//     numObject[thisNum] = 1;
//   }
// }
// console.log(twoSum())


// 2) Given a square matrix mat, return the sum of the matrix diagonals. Write a function that returns the sum
let matrix = [[1, 2, 3], // 0[0] + 0[2] + 1[1] + 2[0] + 2[2]
              [4, 5, 6],
              [7, 8, 9] ] // Expected Output : 25

const matrixDiagonalSum = () => {
  let diagona1 = 0;
  let diagona2 = 0;
  for (let row = 0; row < 3; row++) {
    diagona1 += matrix[row][row];
    diagona2 += matrix[row][matrix.length -row - 1];
  }
  // diagona1 + diagona2 = 30;
  // return diagona1 - diagona2 - 5 = 25
}
console.log(matrixDiagonalSum(matrix));
// const sumOfMatrix = (mat) => {
//   return mat[0][0] + mat[0][2] + mat[1][1] + mat[2][0] + mat[2][2];
// }
// console.log(sumOfMatrix(matrix));



// 3) Given a string. Count the number of Camel Case characters in it.
var S = "ckjkUUYII" // Expected Output:  [4, 5]
const countChara = (s) => {

}
console.log(countChara(S));


// 4) Given a string str containing alphanumeric characters. The task is to calculate the sum of all the numbers present in the string.
// str = "1abc23" // Expected Output : 6



// 5) A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
societyName(["Adam", "Sarah", "Malcolm"]) // ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]) // ➞ "CHLN"NOTE: The secret society's name should be entirely uppercased.

// sort values and pick the first capital letter





// 6) Write a function that converts an object into an array of keys and values.
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) // ➞ [["D", 1], ["B", 2], ["C", 3]]
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) // ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] 

let object = {
  a: 1,
  b: 2,
  c: 3,
}
const convertObject =(obj) => {
  let result = Object.keys(obj).map((key) => [key, obj(key)])
}

function objToKeys(object) {
  let array = [];
  for (let item in object) {
    array.push()
  }
}

// NOTE: You cannot use Prebuild Object functions