
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readCarDetails();

function readCarDetails() {
    let car = {}
    rl.question('Are you a user? ', (answer) => {
        if (answer === 'yes' || answer === 'y') {
            rl.question('Enter a car model?: ', (carmodel) => {
                car.carmodel = carmodel;
                rl.question('Enter a car brand?: ', (carBrand) => {
                    car.carBrand = carBrand;
                    rl.question('Enter a cars making year?: ', (carYear) => {
                        car.carYear = carYear;
                        console.log(car);
                        rl.close();
                    });
                });
            });
        } else {
            console.log("You are not a User, you cant add the car's details");
            rl.close();
        }
    });
}