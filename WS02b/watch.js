const fs = require('fs');

fs.watch('watch.txt', (eventType) => {
    console.log(`Tiedostoa muokattu, syy: ${eventType}`);
});
