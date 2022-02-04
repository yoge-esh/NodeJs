function findEven(params) {
    if(params%2==0)
    {
        console.log(params);
    }
}
console.log("============FUNCTION ENDED===============");


console.log("============FOR LOOP STARED  ===============");
for (var i = 1; i <= 100; i++) {
    findEven(i);
}
console.log("============FOR LOOP ENDED  ===============");


console.log("============WHILE LOOP STARTED  ===============");
i = 1
while (i <= 100) {
    findEven(i);
    i++;
}
console.log("============WHILE LOOP ENDED  ===============");


console.log("============DO WHILE LOOP STARTED  ===============");
a = 1
do {
    findEven(a);
    a++;
} while (a <= 100);
console.log("============DO WHILE LOOP ENDED  ===============");