import React from 'react';
import '../src/css/answer.css';

function Answer({ answer }) {
  return (
    <div className="answer">
      <p>{answer.answer}</p>
      <p>By: {answer.user}</p>
    </div>
  );
}

export default Answer;
