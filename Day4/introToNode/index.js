// readline // read the line from user in NodeJs
// to run this file in terminal

const readline = require('readline'); // to read the line from user
const rl = readline.createInterface({ // to create the interface
    input: process.stdin, // to read the line from user
    output: process.stdout // to print the line from user
});


// there is two different way to read the line from user
// 1) the first way
// rl.question('What is your name? ', (answer) => { // to read the line from user
//     console.log(`Hello ${answer}`); // to print the line from user
//     rl.close(); // to close the interface
// });

// 2) the second way

// node js follow the single thread model,
// which follows an async model, 
// means it will leave fro the current line and go to the next line
// which is shown in bellow lines of code
rl.question('what is your name ?', (answere) => printAnswer(answere));
console.log('welcome to Node js')
console.log('welcome to Node js')
console.log('welcome to Node js')
console.log('welcome to Node js')
console.log('welcome to Node js')
console.log('welcome to Node js')
console.log('welcome to Node js')
function printAnswer(answer) {
    console.log(`Hello ${answer}`);
    rl.close();
}