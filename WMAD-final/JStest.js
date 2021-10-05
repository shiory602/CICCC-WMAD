/* ---------------
Promies
-----------------*/
//then
getQuote().then((quote) => {
  console.log(quote)
}).catch(function(error) {
  console.log(error);
});

//async/await
async function Promise()
  try {
    const quote = await getQuote()
    console.log(quote)
  } catch(err) {
    console.log(err)
  }


/* -----------
if else
-------------*/
// if-else
const age = 30;
let older;

if(age < 20) {
  older = false
} else {
  older = true
}

// conditional operator
const age = 30;
let older;
age < 20 ? older = false : older = true


/*--------------
arrow function
---------------*/
function greeting(firstname, lastname) {
  return `Hi, ${firstname} ${lastname}`
}


const greeting = (firstname, lastname) => {
  return `Hi, ${firstname} ${lastname}`
}



/*------------------------------
set the age of the student to 40
-------------------------------*/
class Student {
  static studentClassName = 'React'

  constructor(name, age) {
    // global variable inside a class
    this.name = name;
    this.age = age;
    // private variable: cannot use it outside constructor
    const studentName = name;
  }
}

const firstStudent = new Student('Ayako', 31);
//Getter
console.log('age', firstStudent.age) // returns 31

/*--------
3 dots
---------*/
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

var all = [...arr, ...arr2]
console.log(all)


/*--------
override
---------*/
const obj = {
  name: 'Ayako',
  age: 31
}

const newObj = {
  name: 'Derrick', ...obj
}