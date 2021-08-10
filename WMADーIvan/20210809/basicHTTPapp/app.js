// Create a Node JS Express or HTTP Application that exposes API routes for the following

// Computer Architecture
// Compute CPU's
// Computer RAM (total and available)
// Computer Disk Space (total and available)
// Computer Hostname
// Computer IP Address


// I should be able to call the application like this

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

const http = require('http');

const server = http.createServer(
  (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('test');
})

server.listen(3000, console.log('server starts'));
