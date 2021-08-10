const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  	//change the MIME type to 'application/json' 
  //   res.writeHead(200, {'Content-Type': 'application/json'});
  //   //Create a JSON
	// let json_response = {
	// 	status : 200 , 
	// 	message : 'succssful' , 
	// 	result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
	// 	code : 2000
	// }
	// res.end( JSON.stringify(json_response) ); 

  fs.readFile('./json_response.json', 'UTF-8', (error, data) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.write(data);
    res.end();
  })
})

server.listen(3000, console.log('server starts'));