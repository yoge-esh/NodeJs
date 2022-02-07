// take a car's model number, nam, year 
const readline = require('readline');
const carsData = require('./cars.js');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// we will import this from another file
// let cars = [];

details();

function details() {
    const car = {}
    rl.question('Enter are you a user ?: ', (answer) => {
        if(answer == 'y' || answer == 'yes'){
            rl.question('Enter your car model: ', (model) => {
                car.model = model;
                rl.question('Enter your car name: ', (name) => {
                    car.name = name;
                    rl.question('Enter your car year: ', (year) => {
                        car.year = year; // add to array
                        carsData.exportedCars.push(car); // add to array
                        if (carsData.exportedCars.length < 3) {
                            details(); //recursive function
                        }
                        else {
                            rl.close(); //close the interface
                            console.log(carsData.exportedCars); // print the array
                        }
                    });
                });
            });
        }
        else
        {
            console.log('you are not allowed to enter a detail sorry, \n Thank you for using our service');
            rl.close();
        } 
    });
}