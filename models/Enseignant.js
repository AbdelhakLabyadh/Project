const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ensSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  numeroCIN: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('enseignant', ensSchema);
