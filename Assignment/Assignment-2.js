//  write a prgram to print all even number from 1 to 100 using for loop
console.log("============FOR LOOP STARTED===============");
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("============FOR LOOP TERMINATED===============");


// write a prgram to print all even number from 1 to 100 using WHILE loop 
console.log("============WHILE LOOP STARTED===============");
let a = 1;
while (a <= 100) {
    if (a % 2 == 0) {
        console.log(a);
    }
    a++;
}
console.log("============WHILE LOOP TERMINATED===============");


// write a prgram to print all even number from 1 to 100 using DO WHILE loop

console.log("============DO WHILE LOOP STARTED===============");
let b = 0;
do {
    if (b == 0) {
        console.log(`${b} is not an neutral number`);
        break;
    }
    else if (b % 2 == 0) {
        console.log(b);
    }
    b++;
} while (b <= 100);
console.log("============DO WHILE LOOP TERMINATED===============");