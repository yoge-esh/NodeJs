let a = 4;
switch (a) {
    case 0:
        console.log("a is 0");
        break;
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    default:
        console.log("a is not 0, 1 or 2");
        break;
}




// conditional operato 

let b = 2;
let conditional = (b == 1) ? "b is 1" : "b is not 1";
console.log(conditional);



// converting the above condoin operator to if else 
if (b == 2) {
    console.log("b is 2");
}
else {
    console.log("b is not 2");
}