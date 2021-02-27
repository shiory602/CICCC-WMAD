//Select the elements
let inputMessage = document.getElementById("inputMessage");
let containerMessage = document.getElementById("showMessage");
let triggerButton = document.getElementById("submit");

//crete the function that will get the value from input and append on html element
const showMessageFunc = () => {

	let selectedText = inputMessage.value; //grab the value from input

	// 1) We need to clean the input
	document.getElementById("form").reset();
	// 2) Check if the input is empty how? if(selectedText === " ") ...
	if(selectedText === "") {
		containerMessage.innerHTML = "Please fill out the form :)";
		// document.getElementById("errorMessage").style.display = "inherit";
		setTimeout(() => {
			containerMessage.innerHTML = "Last Message Delivered."
		}, 2000);
	} else {
		containerMessage.innerHTML = selectedText;//append the value in HTML element
		setTimeout(() => {
			containerMessage.innerHTML = "Last Message Delivered."
		}, 2000);
	}
}


//Call the function when button is clicked
triggerButton.addEventListener("click", ()=> {
	showMessageFunc();
})