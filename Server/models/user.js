const mongoose = require('mongoose');

// Create a User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  });
  
  

module.exports = mongoose.model('User', userSchema);
