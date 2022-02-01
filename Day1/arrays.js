// arrays 
var a = 10;
var b = 20;
var c = a + b;
console.log(`The summation of ${a} and ${b} is ${c}`);



// array 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let number = array.length; // 10
let greaterThan5 = array.filter(function (number) {
    return number > 5;
});
console.log(greaterThan5); // [6, 7, 8, 9, 10]

// class assignment 
let classAssign = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let greaterThan40 = classAssign.filter(function (number) {
    return number > 40;
});
console.log(greaterThan40); // [50, 60, 70, 80, 90, 100]