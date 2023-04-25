const mongoose = require('mongoose');

// Define MongoDB schema
const videoCallSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    roomCode: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model('videocall', videoCallSchema);