//Select the elements
let inputMessage = document.getElementById("inputMessage");
let containerMessage = document.getElementById("showMessage");
let triggerButton = document.getElementById("submit");

//crete the function that will get the value from input and append it to the html element
const showMessageFunc = () => {

	let selectedText = inputMessage.value; 			//grab the value from input
	document.getElementById("form").reset();		// clean the input
	if(selectedText === "") {										// Check if the input is empty
		containerMessage.innerHTML = "Please fill out the form :)";
		setTimeout(() => {
			containerMessage.innerHTML = "Last Message Delivered."
		}, 2000);
	} else {
		containerMessage.innerHTML = selectedText;	//append the value in HTML element
		setTimeout(() => {
			containerMessage.innerHTML = "Last Message Delivered."
		}, 2000);
	}
}


//Call the function when button is clicked
triggerButton.addEventListener("click", ()=> {
	showMessageFunc();
});