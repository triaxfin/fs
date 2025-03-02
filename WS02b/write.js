const fs = require('fs');

const text = 'testi2';

fs.writeFile('output.txt', text, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Kirjoitettu:', text);
});

const text2 = 'testi3';

fs.appendFile('output.txt', text2, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Kirjoitettu:', text2);
});