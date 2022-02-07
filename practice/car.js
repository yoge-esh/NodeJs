// exporting function

const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cars = [];

function details() {
  const car = {};
  rl.question("Enter are you a user ?: ", (answer) => {
    if (answer == "y" || answer == "yes") {
      rl.question("Enter your car model: ", (model) => {
        car.model = model;
        rl.question("Enter your car name: ", (name) => {
          car.name = name;
          rl.question("Enter your car year: ", (year) => {
            car.year = year;
            cars.push(car); 
            if (cars.length < 3) {
              details(); //recursive function
            } else {
              rl.close(); 
              console.log(cars); 
            }
          });
        });
      });
    } else {
      if (cars.length === 0) {
        console.log("sorry u dont have any data");
        exit();
      }

      console.log("\nyou are not allowed to enter a detail sorry,\n");
      console.log("Your data is here, \nThank you for using our service");
      rl.close();
      console.log(cars); 
    }
  });
}
exports.exportedCars = details;
