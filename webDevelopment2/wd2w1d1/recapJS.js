// Shiori Suzuki / afternoon class


// 1. What is ES6?
	// ES6 is a version of JavaScript.

// 2. Name 3 examples of ES6 feature.
	// ⅰ)There was a big update on JavaScript since ES6(2015).
	// ⅱ)ES6 and newer JavaScript is more commonly used in "react.js".
	// ⅲ)ECMAScript is the official name of the language.

// 3. What is the difference between let and const?
	// Both has a variable. "let" is mutable, and "const" is immutable.

// 4. Name at least 5 data types of javascript
// 	ⅰ)String
// 	ⅱ)Numbers
// 	ⅲ)Boolean
// 	ⅳ)Object
// 	ⅴ)Null

// 5. How do you destructure arrays and objects?
// array
	let arr = ["Shiori", "Suzuki"];
	let [firstName, surName] = arr;
	console.log(firstName);
	console.log(surName);
// object
	let obj = {
		name: "Shiori",
		age: 30,
		city: "Vancouver",
	};
	let {name, age, city} = obj;
	console.log(obj.name);
	console.log(obj.age);
	console.log(obj.city);
		
// 6. Name 3 ways to access an object value in ES6
	let fruit = "apple";
	let bag = {
		[fruit]: 5,
	};
	console.log(bag.apple);

	function makeUser(handleName, height) {
		return {
			handleName,
			height,
		};
	}
	console.log(makeUser("Shiori", 163));

	let options = {
		title: "Menu",
		width: 100,
		height: 200,
	};
	let {title, width, height} = options;
	console.log(title);
	console.log(width);
	console.log(height);


// 7. Convert if else statement to conditional operator. (if () {} else {})
	const aveAge = 24;
	if (aveAge > 20) {
		console.log('Age is over 20')
	} else {
		console.log('Age is below 20')
	}

	aveAge > 20 ? console.log('Age is over 20') : console.log('Age is below 20')