const mongoose = require('mongoose');

const ajoneuvoSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  kilpi: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Ajoneuvo', ajoneuvoSchema);