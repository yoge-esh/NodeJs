// random number guessing game 
const { exit } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // to read the line from user
    output: process.stdout // to print the line from user
});

var randomNumber = Math.floor(Math.random() * 100); // to generate random number
var guessCount = 10; // to set the number of guesses

rl.setPrompt('Guess a number between 0 and 100: '); // to set the prompt
rl.prompt(); // to print the line from user
rl.on('line', function(response) { // to read the line from user
    var guess = parseInt(response); // to convert the string to number
    if (guess === randomNumber) {
        console.log(`You guessed the number in ${guessCount-1} guesses`);
        rl.close();
        exit();
    } else if (guess < randomNumber) {
        console.log('Your guess is too low');
        console.log(`You have ${guessCount-1} chances left`);
    } else {
        console.log('Your guess is too high');
        console.log(`You have ${guessCount-1} chances left`);
    }
    guessCount--;
    if (guessCount > 0) {
        rl.setPrompt('Guess a number between 0 and 100: ');
        rl.prompt();
    } else {
        console.log(`You have no more guesses. The number was ${randomNumber}`);
        rl.close();
    }
});

