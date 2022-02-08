const fs = require('fs');

// we have to make a "function" which will be called asynchronously
fs.writeFile('data.txt', 'Data is added with asyncronous function :) ', (err) => {
    console.log('file is created!');
});

fs.appendFile('data.txt', '\nData is updated with asyncronous function :) in NodeJS', (err) => {
    console.log('data is added in file!');
});

fs.readFile('data.txt', 'utf8', (err, data) => { // utf8 is a type of encoding which convert binary data to string
    console.log('\n');
    console.log('data is read from file!');
    console.log('\n');
    console.log(data);
    console.log('\n');
    console.log(err);
});