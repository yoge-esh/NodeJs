const path = require('path');

console.log(path.basename(__filename)); // path.basename(__filename) will give the name of the file
console.log(path.extname(__filename)); 
console.log(path.dirname(__filename)); 

console.log(path.parse("E:/NodeJs/NodeJs/practice/path")); // will give the path of the file 

console.log(path.join(__dirname, 'test', 'hello.html')); // will give the path of the file

const myPath = path.parse("E:/NodeJs/NodeJs/practice/path")
console.log(`name of file is : ${myPath.name}`);