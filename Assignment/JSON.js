// Java Script Object Notation (JSON) to store the data

let jsonobject = {
    "name": "Rajesh",
    "value": 25,
    "age": '25',
    "address": "Kolkata",
    "phone": "9876543210",
    "email": "example@gmail.com",
}

console.log(jsonobject);

// to get the value of a key
// we have two different ways

// 1st method using bracket notation
console.log(jsonobject["email"]);

// 2nd method using dot notation
console.log(jsonobject.name);


// to get the type of json object
console.log(typeof jsonobject.value); // number
console.log(typeof jsonobject.age);  // string