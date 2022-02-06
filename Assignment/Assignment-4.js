let car = [
    {
        "name": "BMW",
        "model": "X5",
        year: "2020",
        add: function (name, model, year) {
            this['name'].push(name);
            this['model'].push(model);
            this['year'].push(year);
        }
    },
    {
        name: "Audi",
        model: "A4",
        year: "2020",
        add: function (name, model, year) {
            this['name'].push(name);
            this['model'].push(model);
            this['year'].push(year);
        }
    },
]

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Are you a User?', (answer) => printAnswer(answer));
function printAnswer(answer) {
    if (answer == 'yes') {
        rl.question('What is your name? ', (answer) => {
            car.add('lamborghini', 'aventador', '2020');
            console.log(car)
            console.log(`Hello ${answer}`);
            rl.close();
        });
    } else {
        console.log("You are not a User, you cant add the car's details");
        rl.close();
    }
}