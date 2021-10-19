// 1. Write a function/polyfill for all objects to calculate their size.
Object.prototype.getSize = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
let object = { a : 1, b: 2, c: 3 }
object.getSize(object) // Expected output 3

// 2. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Note: Volume of a cylinder : V = πr2h
function Cylinder (){
  this.h = height;
  
  Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
  };
  
  var cyl = new Cylinder(7, 4);
  // Volume of the cylinder with four decimal places.
  console.log('volume =', cyl.Volume().toFixed(4));
}



// 3. Write a JavaScript program to create a Clock.
// Note: The output will come every second.

// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

var sec = 0,
    min = 0,
    hou = 0;
setInterval(() => {
  if (sec < 60) {
    sec++;
  } else if (sec = 60 && min < 60) {
    sec = 0;
    min++;
  } else if (min = 60) {
    min = 0;
    hou++;
  }
  console.log(`${hou}:${min}:${sec}`)
}, 1000)


// 4. Write a function that prints 1, 2,3...10 after every 1 second
const printsNums = () => {
  let num;
  setInterval(() => {
    num++
    console.log(num);
  }, 1000)
}


// ************ OUTPUT BASED QUESTIONS *******************

// 5. 
const func = (function(a){
  delete a;
  return a;
})(5);

console.log(func); // 5


// 6.
console.log({a:1} == {a:1}); // true -> false
console.log({a:1} === {a:1}); // true -> false


// 7.
function getAge() { 'use strict';
var age = 21;
console.log(age);
}
getAge(); // 21


// 8.
console.log(!!null); // false
console.log(!!''); // false
console.log(!!1); // true


// 9. 
console.log([...'Ayush']); // ['A', 'y', 'u', 's', 'h']


// 10.
let lang = 'javascript';
(function(){
  let lang = 'java';
})();
console.log(lang);

(function(){
  var lang2 = 'java';
})();
console.log(lang2); // undefined -> javascript




// 11.
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj) // {a: 'three', b: 'two'}