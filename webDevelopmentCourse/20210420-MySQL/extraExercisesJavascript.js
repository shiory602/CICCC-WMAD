// # Extra Exercises JavaScript

// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
// Sample Output: name,sclass,rollno

// Answer:

console.log(Object.keys(student).join(','));




// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

// Answer:

console.log(student);

delete student.rollno;

console.log(student);





// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

// Answer1:

console.log(Object.keys(student).length);

// Answer2:

let length = 0;
for (key in student) {
  length++;
}
console.log(length);





// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }
];

// Answer:

for (index in library) {
  console.log(Object.values(library[index]).join(','));
}






// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr 2 h 
// where r is the radius and h is the height of the cylinder.

class VolumeOfCylinder {
  constructor(r, h) {
    this.r = r;
    this.h = h;
  }

  get getVolume() {
    let π = 3.14;
    return π * this.r * this.r * this.h;
  }
}

const V = new VolumeOfCylinder(2, 4);
console.log(V.getVolume);






// 6. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

var library = [
{
title: 'The Road Ahead',
author: 'Bill Gates',
libraryID: 1254
},
{
title: 'Walter Isaacson',
author: 'Steve Jobs',
libraryID: 4264
},
{
title: 'Mockingjay: The Final Book of The Hunger Games',
author: 'Suzanne Collins',
libraryID: 3245
}];

/* Expected Output:
[[object Object] {
author: "Walter Isaacson",
libraryID: 4264,
title: "Steve Jobs"
}, [object Object] {
author: "Suzanne Collins",
libraryID: 3245,
title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
author: "The Road Ahead",
libraryID: 1254,
title: "Bill Gates"
}] */
// Answer:

// console.log(library.sort(function (a, b) {
//   if (a > b) return -1;
//   if (b > a) return 1;
//   return 0;
// }));

// var tmp = library.map(function (pro) {
//   return {
//     pro: pro.libraryID,
//     key: pro.libraryID
//   };
// }).sort(function (a, b) {
//   if (a > b) return -1;
//   if (b > a) return 1;
//   return 0;
// }).map(function (obj) {
//   return obj.pro;
// });
// console.log(tmp);

var sort_by = function(field_name, reverse, initial){
  var key = initial ?
  function(x)
  {
  return initial(x[field_name]);
  } :
  function(x)
  {
  return x[field_name];
  };
  reverse = !reverse ? 1 : -1;
  
  return function (x, y) {
  return x = key(x), y = key(y), reverse * ((x &gt; y) - (y &gt;
  x));
  } ;
  };
  
  var newobj = library.sort(sort_by(&#39;libraryID&#39;, true, parseInt));
  console.log(newobj);