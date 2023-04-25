// Import required dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Expert = require('../models/expert');
const user = require('../models/user');
const expert = require('../models/expert');
// Create an instance of Express app

// Use middleware to parse request bodies as JSON
router.use(bodyParser.json());

// Endpoint for handling registration requests
router.post('/register',
  async (req, res) => {
    // Check if the user is an expert or not
    if (req.body.isExpert[0]) {

      // Create a new Expert instance
      const expert = new Expert({
        name: req.body.name[0],
        date: req.body.date[0],
        email: req.body.email[0],
        password: req.body.password[0],
        expertise: req.body.expertise[0],
        proof: req.body.proof[0]
      });
      console.log(expert)
      try {
        const saveexpert = await expert.save()
        res.json(saveexpert)
      }
      catch (err) {
        res.send("Error")
      }

    } else {
      // Create a new User instance
      const user = new User({
        name: req.body.name[0],
        date: req.body.date[0],
        email: req.body.email[0],
        password: req.body.password[0],
      });
      console.log(user)
      try {
        const saveuser = await user.save()
        res.json(saveuser)
      }
      catch (err) {
        res.send("Error")
      }

    }
  });

  router.post('/login',
    async (req, res) => {
        try {
            const { email, password } = req.body;
            // Check if user exists
            const user = await User.findOne({ email });
            const expert =await Expert.findOne({email});
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            // Check password
            // const passwordMatch = await bcrypt.compare(password, user.password);
            console.log(password, user.password )
            const passwordMatch = password===user.password;
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            else{
              const response = {
                name: user.name, // Add user's name to the response
                email: user.email, // Add user's email to the response
                message: 'Login successful',
              };
            }
            // Create token
            const token = jwt.sign(
                { userId: user._id, email: user.email },
                "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MDA2NzI5NSwiaWF0IjoxNjgwMDY3Mjk1fQ.2rS3b8eA6m31qt-x3HE2rT8meEVna56A9XRvY9vUaNk",
                { expiresIn: '1h' }
            );
            
            // Return user info and token
            res.json({
                id: user._id,
                name: user.name,
                email: user.email,
                type: user.role,
                token:token
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
  );

  router.get('/register', async (req, res) => {
    try {
      const userId = req.params.userId;
      // Fetch user details from the database by user ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Send user details as response
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user details', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  


module.exports = router;