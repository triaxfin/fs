const fs = require('fs');

fs.mkdir('dir', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Luotu dir!');
});
