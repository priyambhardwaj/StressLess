// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const router = express();
router.use(bodyParser.json());

const Message = require('../models/Message');

// Define an array to store questions
const questions = [];




// Handle POST request to add a new question
router.post('/putques', async (req, res) => {
  try {
    const newQuestion = req.body.question;

    questions.push({ question: newQuestion, answers: [] });


    res.status(201).json({ success: true, message: 'Question added successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to add question' });
  }
});

router.put('/answers', (req, res) => {
    const questionId = req.params.questionId;
    const { answer } = req.body;
    const updatedQuestion = {
        id: questionId,
        answer: answer
      };
      res.json(updatedQuestion);
    });

// Handle GET request to fetch all questions
router.get('/putques', async (req, res) => {
  try {
    
    res.json({ success: true, data: questions });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch questions' });
  }
});

// Handle POST request to add an answer to a question
router.post('/answers', async (req, res) => {
  try {
    const questionId = req.params.id;
    const answer = req.body.answer;
    const question = questions.find(q => q.question === questionId);
    if (question) {
      question.answers.push(answer);
      res.json({ success: true, message: 'Answer added successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Question not found' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to add answer' });
  }
});

module.exports=router;