let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("email");
let inputCollege = document.getElementById("college");


submit.addEventListener("submit", (e)=> {
  console.log("submitted!")
  e.preventDefault();
  if(!inputName.value || !inputEmail.value || !inputCollege.value) {
    alert("Fill all forms.")
    return;
  } else {
    console.log(inputName.value)
    // console.log(inputEmail.value)
    // console.log(inputCollege.value)
  }
})