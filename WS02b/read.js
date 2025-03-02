const fs = require('fs');

fs.readFile('example.txt', 'utf8', (data) => {
    console.log(data);
});
