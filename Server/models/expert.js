const mongoose = require('mongoose');

// Create an Expert schema
const expertSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    expertise: { type: String,  },
    proof: { type: String,}
  });

module.exports = mongoose.model('Expert',expertSchema);
