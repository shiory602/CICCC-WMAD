// 1. Create a function that counts the integers number of digits.
function count(num) {
  return String(num).length;
}
console.log(count(318)); // Expected output 3


// 2. Create a Table with 3 rows and 3 columns using Javascript
import "./styles.css";

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById("body").appendChild(table);

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "1";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "2";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "3";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement("tr");
let row_2_data_1 = document.createElement("td");
row_2_data_1.innerHTML = "4";
let row_2_data_2 = document.createElement("td");
row_2_data_2.innerHTML = "5";
let row_2_data_3 = document.createElement("td");
row_2_data_3.innerHTML = "6";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

let row_3 = document.createElement("tr");
let row_3_data_1 = document.createElement("td");
row_3_data_1.innerHTML = "7";
let row_3_data_2 = document.createElement("td");
row_3_data_2.innerHTML = "8";
let row_3_data_3 = document.createElement("td");
row_3_data_3.innerHTML = "9";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);



// 3. Create a counter using html, js and css. There should be a (+) button and (-) button which will increment and decrement the value. 
// Note: Value cannot go below 0
let form = document.createElement("form");
let buttonP = document.createElement("button");
let buttonM = document.createElement("button");
let text = document.createElement("h1");

let count = 0;

buttonP.innerHTML = "+";
buttonM.innerHTML = "-";
text.innerHTML = "Count: " + count;

form.appendChild(buttonP);
form.appendChild(buttonM);
form.appendChild(text);
document.querySelector("body").appendChild(form);

buttonP.addEventListener("click", (event) => {
  count++;
  text.innerHTML = "Count: " + count;
  event.preventDefault();
});

buttonM.addEventListener("click", (event) => {
  if (count > 0) {
    count--;
    text.innerHTML = "Count: " + count;
  } else {
    text.innerHTML = "Count: " + count;
  }
  event.preventDefault();
});



// 4. Create a form, having values Name, Email, Password and console those values entered by the user on submit button
let form = document.createElement("form");

let labelName = document.createElement("label");
let inputName = document.createElement("input");
labelName.innerHTML = "Name";

let labelEmail = document.createElement("label");
let inputEmail = document.createElement("input");
labelEmail.innerHTML = "<br>Email";

let labelPassword = document.createElement("label");
let inputPassword = document.createElement("input");
labelPassword.innerHTML = "<br>Password";

let button = document.createElement("button");
button.innerHTML = "Submit";
// button.insertAdjacentHTML("afterend", "<br>");

labelName.appendChild(inputName);
labelEmail.appendChild(inputEmail);
labelPassword.appendChild(inputPassword);
form.appendChild(labelName);
form.appendChild(labelEmail);
form.appendChild(labelPassword);
form.appendChild(button);

document.body.appendChild(form);

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(
    `Name: ${inputName.value}
    Email: ${inputEmail.value}
    Password: ${inputPassword.value}`
  );

  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
});
