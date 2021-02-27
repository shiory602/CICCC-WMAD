
//Select the elements
let inputMessage = document.getElementById("inputMessage");
let containerMessage = document.getElementById("showMessage");
let triggerButton = document.getElementById("Submit");

//crete the function that will get the value from input and append on html element
const showMessageFunc = () => {
   let selectedText = inputMessage.value; //grab the value from input
   containerMessage.innerHTML = selectedText; //append the value in HTML element
   // 1) We need to clean the input
   // 2) Check if the input is empty how? if(selectedText === " ") ... 

}

//Call the function when button is clicked

triggerButton.addEventListener("click",() => {
    showMessageFunc();
})