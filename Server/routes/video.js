const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

router.use(bodyParser.json());

const videoCall = require('../models/videocall');

router.post('/schedule', async (req, res) => {
    try {
        // Extract form data from request body
        const { name, email, date, time, roomCode } = req.body;
        console.log(name, email, date, time, roomCode);

        // Create a new video call document
        const newVideoCall = new videoCall({
            name,
            email,
            date,
            time,
            roomCode
        });

        // Save the video call document to MongoDB
        await newVideoCall.save();

        // Send response with success message and room code
        res.status(200).json({
            success: true,
            message: 'Video call scheduled successfully',
            roomCode: roomCode
        });
    } catch (err) {
        console.error('Error scheduling video call:', err);
        // Send error response
        res.status(500).json({
            success: false,
            message: 'Error scheduling video call',
            error: err.message
        });
    }
});

router.get('/schedule', async (req, res) => {
    try {
        // Fetch all video calls from MongoDB
        const videoCalls = await videoCall.find();

        // Send response with fetched video calls
        res.status(200).json({
            success: true,
            message: 'Video calls retrieved successfully',
            videoCalls: videoCalls
        });
    } catch (err) {
        console.error('Error retrieving video calls:', err);
        // Send error response
        res.status(500).json({
            success: false,
            message: 'Error retrieving video calls',
            error: err.message
        });
    }
});


module.exports = router;
