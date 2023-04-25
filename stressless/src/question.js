import React, { useState } from 'react';
import Answer from './answer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import '../src/css/question.css';

function Question({ question }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [newAnswer, setNewAnswer] = useState('');
  const [likes, setLikes] = useState(question.likes || 0);
  const [dislikes, setDislikes] = useState(question.dislikes || 0);


  const loggedInName = localStorage.getItem('loggedInName');

  const handleSubmit = (event) => {
    event.preventDefault();
    question.answers.push({ answer: newAnswer, user: loggedInName });
    setNewAnswer('');
    setShowAnswers(true);
  };

  const handleNewAnswerChange = (event) => {
    setNewAnswer(event.target.value);
  };

  const [liked, setLiked] = useState(false);
const [disliked, setDisliked] = useState(false);

const handleLikeClick = () => {
  if (!liked) {
    setLikes(likes + 1);
    setLiked(true);
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  }
};

const handleDislikeClick = () => {
  if (!disliked) {
    setDislikes(dislikes + 1);
    setDisliked(true);
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    }
  }
};
  return (
    <div className="cardsQues">
      <div className="cardsQues-header">
        <h5 className="cardsQues-title">{question.question}</h5>
        <div className="like-dislike-buttons">
          <div className="like-button" onClick={handleLikeClick}>
            <FontAwesomeIcon icon={faThumbsUp} size="2x" />
            <span>{likes}</span>
          </div>
          <div className="dislike-button" onClick={handleDislikeClick}>
            <FontAwesomeIcon icon={faThumbsDown} size="2x" />
            <span>{dislikes}</span>
          </div>
        </div>
        <span className="cardsQues-subtitle">asked by {question.user}</span>
      </div>
      <div className="cardsQues-body">
        <div className='show_hide'>
          <button onClick={() => setShowAnswers(!showAnswers)}>
            {showAnswers ? 'Hide answers' : 'Show answers'}
          </button>
        </div>
       
        {showAnswers && (
          <div className='ans'>
            {question.answers.map((a, index) => (
              <Answer key={index} answer={a} />
            ))}
            <form onSubmit={handleSubmit}>
              <label>
                Answer this question:
                <textarea value={newAnswer} onChange={handleNewAnswerChange} />
              </label>
              
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}


export default Question;