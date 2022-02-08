const os = require('os');

console.log(os.arch()) // architecture of the system i.e 64X bit or 32X bit

const freeMemory = os.freemem(); // free memory in bytes
// console.log(freeMemory); // in bytes
console.log(`${freeMemory/1024/1024/1024} remaning GB`); // in GB` 


const totalMemory = os.totalmem(); // total memory in bytes
// console.log(totalMemory); // in bytes
console.log(`${totalMemory/1024/1024/1024} total GB`); // in GB`


console.log(os.cpus()); // array of objects of cpu
console.log(`hostname: ${os.hostname()}`); // hostname of the system
console.log(`platform: ${os.platform()}`); // platform of the system
