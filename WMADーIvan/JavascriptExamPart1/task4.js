// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:
// 1. Create a root node whose value is the maximum value in nums.
// 2. Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// 3. Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

let nums = [3,2,1,6,0,5];
// output: [6,3,5,null,2,0,null,1]
let output;

let maxNum = Math.max(...nums); // 6
output.push(maxNum);
let pickNum = nums.filter(n => n != maxNum); // [3,2,1,0,5]
console.log(pickNum);


nums = [3,2,1];
// output: [3,null,2,null,1]


// Now I need to divide into two right and left. Then pick up the maximum value each of those.
