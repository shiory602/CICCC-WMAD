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

let v;
// var api = require('./routes/api');

// app.use('/api', api);

// const router = express.Router();

app.get('/api', (req, res) => {
  res.send('Change the path.');
});

app.get('/api/arch', (req, res) => {
  v = os.arch();
  res.send(v);
})

app.get('/api/cpus', (req, res) => {
  v = os.cpus();
  res.send(v);
})

app.get('/api/ram', (req, res) => {
  v = os.totalmem();
  res.send(v);
})

app.get('/api/diskspace', (req, res) => {
  v = os.freemem();
  res.send(v);
})

app.get('/api/hostname', (req, res) => {
  v = os.hostname();
  res.send(v);
})

app.get('/api/ipaddress', (req, res) => {
  v = getLocalAddress();
  res.send(v);
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