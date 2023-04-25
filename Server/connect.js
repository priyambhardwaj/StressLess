const mongoose = require('mongoose');

const uri = 'mongodb://0.0.0.0:27017/stress';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB Connected: ${conn}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;