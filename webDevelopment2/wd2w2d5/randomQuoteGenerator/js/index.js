// Declare quotes' constants as an array
const QUOTES = [
	{
		quote: "Life is about making an impact, not making an income.",
		author: "Kevin Kruse",
	},
	{
		quote: "Whatever the mind of man can conceive and believe, it can achieve.",
		author: "Napoleon Hill",
	},
	{
		quote: "Strive not to be a success, but rather to be of value.",
		author: "Albert Einstein",
	},
	{
		quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. ",
		author: "Robert Frost",
	},
]

// Select the elements
let triggerButton = document.getElementById("triggerButton");
let showMessage = document.getElementById("showMessage");
let showAuthor = document.getElementById("showAuthor");

// Create the function that will get the value from the array, and append it to the HTML element
const showMessageFunc = () => {
	let randomNumber = Math.floor(Math.random() * (QUOTES.length));
showMessage.innerHTML = QUOTES[randomNumber].quote;
showAuthor.innerHTML = QUOTES[randomNumber].author;
}


// Call the function when button is clicked
triggerButton.addEventListener(click, () => {
	showMessageFunc();
	// showAuthorFunc();
})