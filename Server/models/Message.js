const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answers: [{
    type: String
  }]
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
