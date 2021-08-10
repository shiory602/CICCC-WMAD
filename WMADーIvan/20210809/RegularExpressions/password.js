// Validate a password with the following format:
// Password at least 6 digits.
// At least one lowercase
// At least one uppercase
// At least one special character from @ # $ % ^ & *

const password = 'Ab$s,EEs';
const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

let res = password.match(pattern);
if(res) {
  console.log('Valid password!');
} else {
  console.log('Not a valid password.');
}
