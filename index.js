const m = require('./math.js');

//We're gonna use a native method
const os = require('os');

//We're gonna use fs, wirh this natve library we can use a files from the SO.
const fs = require('fs');

//Module http - client/server
const http = require('http');

//NPMSJ.com library from community
//Example, i can download first npm install colors and then i can use const colors = require('colors'); 
const colors = require('colors');

//How to manage the all project modules
//We have to use the command : npm init
//Then we have to put the all information

//Important Framework install express
// npm i express
// npm install express ---- is the same i or install 
const express = require('express');

const server1 = express();

//We're goma create a message for the index
server1.get('/', function(req, res){
    res.write('I am here thanks to Express');
    res.end();

})

server1.listen(3001, function(){
console.log('new server with Express on port 3001'.red);
});


console.log(m.multiply(5,5));
console.log(m.divide(5,5));
console.log(m.add(5,5));
console.log(m.substract(5,5));

console.log(m.divide(0,5));

//OS
console.log(os.platform());
console.log(os.release());
console.log('uptime: ' + os.uptime());
console.log('user info: ' + os.userInfo().username);

//FS 
//The next code is a callback - async
//creating a file
fs.writeFile('./texto', 'I will be the line one on the file', function(error){
if(error){
    console.log('somethings was wrong!!!!');
}
console.log('The file was created satisfactory')
})

//That is a sync code
console.log('the next code after to async code, I will show in console before to async code (before to create file)');

//reading a file
fs.readFile('./texto', function(error, data){
if(error){
    console.log('We cant read the file or this file no exist');
}
    console.log(data.toString());
})

//HTTP request to server
//We're gonna create a server on localhost and then write a message and then close the message to open the comunication for other client.
const handlerServer = function(req, res){
//writing info to the client (200(all Ok) 404(No found)) -- object context {'content-type':'text/html'}
res.writeHead(200, {'content-type':'text/html'});
//writing msg and close     
res.write('I am here from nodeJs Server');
res.end();
}

const server = http.createServer(handlerServer);

server.listen(3000, function(){
    console.log('Server created on port 3000');
});

//We're gonna use a colors library 
console.log('I am Grenn'.green);





