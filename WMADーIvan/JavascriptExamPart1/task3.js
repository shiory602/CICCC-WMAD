// Given the head of a liked list and two integers m and n. Traverse the linked list and remove some nodes in the following way:
// - Start with the head as the current node.
// - Keep the first m nodes starting with the current node.
// - Remove the next n nodes
// - Keep repeating steps 2 and 3 until you reach the end of the list.
// Return the head of the modified list after removing the mentioned nodes.
// How can you solve this problem by modifying the list in-place?

let head = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let m = 2;
let n = 3;
// declare an array for output
let output = [];
// filter each two values, remove next three values, and continue it till it ends
for (let i = 0; i < head.length; i++) {
  if(i <= m - 1) {
    output.push(head[i]); // [1,2]
    if(i <= (2*m + n) - 1) {
      output.push(head[i]);
    }
  }
}
console.log(output);