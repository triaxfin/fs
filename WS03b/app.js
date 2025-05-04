const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { 
    message: 'Hello world!',
    items: [
      { name: 'Item 1', stock: true },
      { name: 'Item 2', stock: false },
      { name: 'Item 3', stock: true}
    ],
    users: [
      { id: 1, name: 'Jaakko' },
      { id: 2, name: 'Maija' },
      { id: 3, name: 'Tomi' }
    ]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});