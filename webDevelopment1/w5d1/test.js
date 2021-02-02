// Shiori Suzuki / WMAD afternoon class
// 1) Write a JavaScript program to find the area of a triangle where lengths of the three of its
// sides are 5, 6, 7.
// 2) Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given
// integer.




// 3) Write a JavaScript program that capitalizes all the letters in a given string.

function CapitalizeString(string) {
	return string.toUpperCase();
}

var result = CapitalizeString("shiori suzuki");
console.log(result);
console.log(CapitalizeString("shiori"));



// 4) Write a JavaScript program where the program takes a random integer between 1 to 10,
// the user is then prompted to input a guess number. If the user input matches with guess
// number, the program will display a message &quot;Good Work&quot; otherwise display a message
// &quot;Not matched&quot;.

// let result4;
// let random = Math.floor(Math.random() * 10) + 1;
// let answer = prompt("Guess number between 1 to 10.");

// if (random == answer) {
// 	result4 = "Good Work";
// } else {
// 	result4 = "Not matched"
// }

// console.log(result4);



// 5) Write a JavaScript program to replace all the numbers with a specified number of a
// given array of integers.

// I try to change 2 to 6.
let array5 = [2, 5, 3, 2, 8, 2];
console.log("original array [" + array5 + "]");

let result5 = function (arr, given, specified) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == given) {
			arr[i] = specified;
		}
	}
	return arr;
}

console.log(result5(array5, 2, 6));



// 6) Write a JavaScript program that sorts a given array.

let array6 = [4, 2, 3, 5, 1];
console.log("original array [" + array6 + "]");

console.log(array6.sort());



// 7) Write a JavaScript program that reverses a given array

let array7 = ["apple", "tomato", "banana", "carrot", "peach"];
console.log("original array [" + array7 + "]");
console.log(array7.reverse());




// 8) Create an array “customer” objects. Each customer object should have at least 3 fields:
// “name”, “email”, “order”. Create at least 3 such objects.

let customer = {
	client1: {
		name: "Allen",
		emal: "abcd@gmail.com",
		order: 100,
	},
	client2: {
		name: "Sarah",
		emal: "efgh@gmail.com",
		order: 200,
	},
	client3: {
		name: "John",
		emal: "ijkl@gmail.com",
		order: 300,
	},
};

console.log(customer);



// 9) Filter the customers array to show the customer with the most expensive order.

let customer9 = {
	client: {
		name: "Allen",
		emal: "abcd@gmail.com",
		order: 100,
	},
	client: {
		name: "Sarah",
		emal: "efgh@gmail.com",
		order: 200,
	},
	client: {
		name: "John",
		emal: "ijkl@gmail.com",
		order: 300,
	},
};

let result9 = function (amount) {
	for (let i = 0; i < customer9.client.order.length; i++) {
		if (customer9.client[i].order > amount) {
			amount = customer9.client[i].order;
		} else {
			return amount;
		}
	}
}

console.log(result9(0));