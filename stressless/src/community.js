import React, { useState, useEffect } from 'react';
import Question from './question';
import '../src/css/community.css';

function CommunityPage() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5001/putques');
      if (response.ok) {
        const data = await response.json();
        setQuestions(data.data);
      } else {
        console.error('Failed to fetch questions:', response.statusText);
      }
    } catch (err) {
      console.error('Failed to fetch questions:', err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5001/putques', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: newQuestion }),
      });
      if (response.ok) {
        setQuestions([...questions, { question: newQuestion, answers: [] }]);
        setNewQuestion('');
        console.log("Successful");
      } else {
        console.error('Failed to add question:', response.statusText);
      }
    } catch (err) {
      console.error('Failed to add question:', err);
    }
  };

  const handleNewQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  return (
    <div className='comm'>
      <h1>Stressless Community</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ask a question:
          <textarea value={newQuestion} onChange={handleNewQuestionChange} />
        </label>
        <div className='comm-btn'>
          <button type='submit'>Submit</button>
        </div>
      </form>
      {questions.map((q, index) => (
        <Question key={index} question={q} />
      ))}
    </div>
  );
}

export default CommunityPage;