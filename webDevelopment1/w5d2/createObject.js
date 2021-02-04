// Shiori Suzuki / WMAD afternoon class

// 1) Create an array of ‘meal’ objects, where each meal object consists of “name”, “prince”
// and “popularity” fields. Your array should of size 3 at least.

let meal = {
	pizza = {
		name: "pizza",
		price: 14,
		popularity: "high",
	},

	hamburger = {
		name: "Humburger",
		price: 8,
		popularity: "high",
	},

	coke = {
		name: "Coke",
		price: 5,
		popularity: "low"
	}
}

// 2) Using JavaScript, dynamically create a HTML table to display the contents of your array
// as follows:

function convertKeys(object) {
	let arr = Object.keys(object);
	return arr;
}
function convertValues(object) {
	let arr = Object.values(object);
	return arr;
}
// console.log(convertKeys(meal[0]));

let table = document.createElement('table');
let tr = document.createElement('tr');
for (let i = 0; i < meal.length; i++) {
	let th = document.createElement('th');
	th.innerHTML = convertKeys(meal.pizza[i]);
	tr.appendChild(th);
}
table.appendChild(tr);
document.getElementById('solution').appendChild(table);


for (let j = 0; j < meal.length; j++) {
	let tr = document.createElement('tr');
	for (let k = 0; k < meal[j].length; k++) {
		let td = document.createElement('td');
		td.innerHTML = convertValues(meal[k]);
		tr.appendChild(td);
	}	
	table.appendChild(tr);
	table.insertBefore(tr, null);
}

document.getElementById('solution').appendChild(table);




// 3) Using CSS, give some styling to your table.
// 4) Using JavaScript event listeners, add a hover effect to your table where the line
// background color changes with mouse over.
// 5) Using JavaScript, create a form where a user can enter a new meal object to the array.
// 6) When a user submits a new meal, trigger an alert box to show the user what she has
// entered.
// 7) Upload and submit all your work on Google Classroom to Week 5 &gt; Lab 2 Submission.
// create table element