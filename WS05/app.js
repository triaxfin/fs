const express = require('express');
const mongoose = require('mongoose');
const ajoneuvoRoutes = require('./routes/ajoneuvoRoutes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected!'))
.catch(err => console.error('Connection error:', err));

app.use('/api', ajoneuvoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});