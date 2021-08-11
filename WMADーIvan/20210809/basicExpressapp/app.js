// http://localhost:port/api/arch               
// ----> shows architecture
// http://localhost:port/api/cpus             
//  ----> shows cpus
// http://localhost:port/api/ram           
// ----> shows ram
// http://localhost:port/api/diskspace       
// ----> shows disk space
// http://localhost:port/api/hostname   
// ----> shows hostname
// http://localhost:port/api/ipaddress       
//  ----> shows ip address

const express = require('express');
var app = express();
const os = require('os');
// npm i check-disk-space
const checkDiskSpace = require('check-disk-space').default;
let GB = (1024*1024*1024);

app.get('/api', (req, res) => {
  res.send('Change the path.');
});

app.get('/api/arch', (req, res) => {
  res.send(os.arch());
})

app.get('/api/cpus', (req, res) => {
  res.send(os.cpus());
})

app.get('/api/ram', (req, res) => {
  res.send(`
    RAM: ${os.totalmem() / GB} GB,
    Free RAM: ${os.freemem() / GB} GB
  `);
})

app.get('/api/diskspace', (req, res) => {
  res.send(checkDiskSpace('/mnt/mygames').then((diskSpace) => {
    console.log(diskSpace)
    // {
    //     diskPath: '/',
    //     free: 12345678,
    //     size: 98756432
    // }
    // Note: `free` and `size` are in bytes
  }));
})

app.get('/api/hostname', (req, res) => {
  res.send(os.hostname());
})

app.get('/api/ipaddress', (req, res) => {
  res.send(getLocalAddress());
})

app.listen(3000, () => {
  console.log('Start server port: 3000');
})

// https://qiita.com/_shimizu/items/b38d1459abf8436f7f1f
function getLocalAddress() {
  var ifacesObj = {}
  ifacesObj.ipv4 = [];
  ifacesObj.ipv6 = [];
  var interfaces = os.networkInterfaces();

  for (var dev in interfaces) {
      interfaces[dev].forEach(function(details){
          if (!details.internal){
              switch(details.family){
                  case "IPv4":
                      ifacesObj.ipv4.push({name:dev, address:details.address});
                  break;
                  case "IPv6":
                      ifacesObj.ipv6.push({name:dev, address:details.address})
                  break;
              }
          }
      });
  }
  return ifacesObj;
};