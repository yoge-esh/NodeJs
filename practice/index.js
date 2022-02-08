const fs = require('fs');

// creating a new file and storing a data in it 
fs.writeFileSync('example.txt', 'Hello World, welcome to Node.js');

// adding data synchronously
fs.appendFileSync('example.txt', '\nThis is a new line');


// reading data synchronously
const data = fs.readFileSync('example.txt', 'utf-8');
// console.log(data);

// buffering the data
const dataBuffer = fs.readFileSync('example.txt');
// console.log(dataBuffer.toString()); // converting buffer to string
console.log(dataBuffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 2c 20 77 65 6c 6c 6f 20 74 6f 20 4e 6f 64 65 2e 6a 73> read the date 


// RENAME FILE NAME     
fs.renameSync('example.txt', 'readWriteData.txt');