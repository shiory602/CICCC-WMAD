// Computer Architecture
// Compute CPU's
// Computer RAM (total and available)
// Computer Disk Space (total and available)
// Computer Hostname
// Computer IP Address

/*
I should be able to call the application like this

node yourapp.js -arch ----> shows architecture
node yourapp.js -cpu ----> shows cpus
node yourapp.js -ram----> shows ram
node yourapp.js -hdd----> shows disk space
node yourapp.js -hostname ----> shows hostname
node yourapp.js -ip ----> shows ip address
*/

const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
let GB = (1024*1024*1024);

if (process.argv != "") {
  switch (process.argv[2]) {
    case '-arch':
      console.log(os.arch());
      break;
    case '-cpu':
      console.log(os.cpus());
      break;
    case '-ram':
      console.log('RAM: ', os.totalmem() / GB, 'gigabytes');
      console.log('Free RAM: ', os.freemem() / GB, 'gigabytes');
      break;
    case '-hdd':
      checkDiskSpace('/mnt/mygames').then((diskSpace) => {
        console.log(diskSpace)
        // {
        //     diskPath: '/',
        //     free: 12345678,
        //     size: 98756432
        // }
        // Note: `free` and `size` are in bytes
      })
      break;
    case '-hostname':
      console.log(os.hostname());
      break;
    case '-ip':
      console.log(os.networkInterfaces());
      break;
    default:
      console.log(`
      Choose command below
      -arch
      -cpu
      -ram
      -hdd
      -hostname
      -ip
      `)
      break;
  }
}
