// 1) Write a function to count odd and even numbers in an array
let array = [1,4,11,20,55,0,4] // Expected Output = [3, 4]

const countOddEven = (arr) => {
  let even = 0;
  let odd = 0;
  arr.forEach(v => v % 2 === 0 ? even++ : odd++)
  return [odd, even]
}
console.log(countOddEven(array));



// 2) Write a function to Move all the 0's on left and 1's on right
let array = [1,0,1,1,1,0,1,0,0] // Expected Output [0,0,0,0,1,1,1,1,1]

const moveZeroOne = (arr) => {
  let movedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) movedArray.push(arr[i])
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) movedArray.push(arr[i])
  }
  return movedArray;
}

console.log(moveZeroOne(array));


// unction segregateArray(array) {
//   let low = 0;
//   let high = array.length - 1;
  
//   while(high > low) {
 
 
//      if (low > high) {
//          break;
//      }
 
//      if (array[low] === 0 && array[high] === 1) {
//          high--;
//          low++;
//      }
 
//      if (array[low] === 0 && array[high] === 0) {
//      low++;
//      }
 
//      if (array[low] === 1 && array[high] === 1) {
//          high--;
//      }
 
//      if (array[low] === 1 && array[high] === 0) {
//          let temp = array[low];
//          array[low] = array[high];
//          array[high] = temp;
//      }
 
//   }
//      return array;
 
//  }


// 3) Write a function to sort the array without using ES6 SORT function
let array = [11,20,0,-20,4,22,1,0] // Expected Output [-20, 0, 0, 1, 4,11,20, 20]

const bubbleSort = (arr) => {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(array));

// 3)  Write the polyfill of Foreach Function for Array
Array.__proto__.forEach = function(cb, v) {
  for (let i = 0; i < this.length; i++) {
    return cb(v);
  }
}




// 4) Write the polyfill of Some Function for Array
Array.prototype.somefy = function(cb) {
  let cond = false;
  let arr = this;

  for (let i = 0; i < this.length; i++) {
    if (cb(v) === true) {
      cond = true;
      break;
    }
  }
  return cond;
}



// 5) Write the polyfill of Every Function for Array
Array.prototype.Everyfy = function(cd) {
  let cond = true;
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (!cd[arr[i]]) {
      cond = false;
      break;
    }
  }
  return cond;
}