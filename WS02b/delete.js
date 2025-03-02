const fs = require('fs');

fs.unlink('temp.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('temp.txt poistettu!');
});
