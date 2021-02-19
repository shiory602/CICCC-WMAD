// Shiori Suzuki

// 1. What are the 3 types of for loop
let box = [];
	for (let i = 0; i < 10; i ++) {
		box.push(i);
	}
	console.log(box);
	
	while (box.length < 10) {
		let hi =+ 1;
		box.push(hi);
	}
	console.log(box);
	
	do {
		let hi =+ 2;
		box.push(hi)
	} while (box.length < 10)
	console.log(box);


// 2. Convert a standard javascript function to an arrow function
function add (a, b) {
	return a + b;
}
console.log(add(1, 2));

// add = (a, b) => {
// 	return a + b;
// }
add = (a, b) => a + b;
console.log(add(1, 2));

hello = (name, city) => `Hello, ${name} from ${city}.`
console.log(hello("Shiori", "Vancouver"));

// 3. Use a switch statement to answer this
// https://www.codewars.com/kata/basic-mathematical-operations/train/javascript
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2)
{
  switch (operation) {
      case '+' :
        return value1 + value2;
      case '-' :
        return value1 - value2;
      case '*' :
        return value1 * value2;
      case '/' :
        return value1 / value2;
  }
}
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));


// 4. Use any looping to answer this
// https://www.codewars.com/kata/reversed-sequence/train/javascript
// Build a function that returns an array of integers from n to 1 where n>0.
const reverseSeq = n => {
	let arr = [];
		for (let i = n; i > 0; i--) {
			arr.push(i);
		}
		return arr;
	};
console.log(reverseSeq(5));


// 5. Just a comparison but good for understanding English
// https://www.codewars.com/kata/transportation-on-vacation/train/javascript
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  let payment = 0;
  for (let i = 1; i <= d; i++) {
    payment += 40;
  }
  if (d >= 7) {
    return payment - 50;
  } else if (d >= 3) {
    return payment - 20;
  } else {
    return payment;
  }
}
console.log("Should work for under 3 days:");
    console.log(rentalCarCost(1))
    console.log(rentalCarCost(2))
  
  console.log("Should work for under 7 days:");
    console.log(rentalCarCost(3));
    console.log(rentalCarCost(4));
    console.log(rentalCarCost(5));
    console.log(rentalCarCost(6));
  
  console.log("Should work for 7 or more days:");
    console.log(rentalCarCost(7));
    console.log(rentalCarCost(8));
    console.log(rentalCarCost(9));
    console.log(rentalCarCost(10));


// 6. Use conditions to answer this (a little harder?)
// https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
  if (beast.substr(0, 1) == dish.substr(0, 1) && beast.substr(-1) == dish.substr(-1)) {
    return true;
  } else {
    return false;    
  }
}
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));