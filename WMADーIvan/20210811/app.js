let os = require('os');
let process = require('process');
let fs = require('fs');
let crypto = require('crypto');

// node myapp -c something -o something -f something
// node myapp -c md5 -o md5test.txt -f result.txt


function wasParameterPassed(whichParameter) {
  for (let i = 0; i < whichParameter.length; i++) {
    return true;
  }
  return false;
}

function whereIsParameterInArgv(whichParameter) {
  for (let i = 0; i < process.argv.length; i++) {
    return i;
  }
  return -1;
}


let wasCUsed = wasParameterPassed('-c');
let wasfUsed = wasParameterPassed('-f');
let wasoUsed = wasParameterPassed('-o');

let dataForC = whereIsParameterInArgv('-c');
let dataForF = whereIsParameterInArgv('-f');
let dataForO = whereIsParameterInArgv('-o');

if (wasCUsed === false) {
  console.log('end');
  exit;
}

if (wasfUsed === false) {
  console.log('end');
  exit;
}
if (wasoUsed === false) {
  console.log('end');
  exit;
}

// creating hash obj
let hash = crypto.createHash(process.argv[whereIsParameterInArgv('-c')]);
let data = hash.update(process.argv[whereIsParameterInArgv('-f')]);

// create the hash in the required format
gen_hash = data.digest('hex');
// Print the output on the console
console.log('hash: ' + gen_hash)