import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/css/squiz.css';
import music from '../src/music/Gaddari_karbe.mp3';
import relax from '../src/music/relax.mp3';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const questions = [

    {
        id: "1",
        question: '1. How often have you felt that you were unable to control the important things in your life?',
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ],
    },
    {
        question: '2. How often have you felt nervous and “stressed”?',
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
    {
        question: "3. How often do you feel like you're not getting the support you need from friends, family, or colleagues?",
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
    {
        question: "4. How often do you feel like you're not in control of your life?",
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
    {
        question: "5. How often do you feel like you don't have anyone to talk to or confide in",
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
    {
        question: '6. How often have you felt nervous and “stressed”?',
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
    {
        question: "7. How often do you experience physical symptoms of stress, such as headaches or muscle tension?",
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
    {
        question: "8. How often do you feel like you don't have enough time to get everything done?",
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
    {
        question: "9. How often do you feel tired or exhausted, even when you haven't done anything physically demanding?",
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
    {
        question: "10. How often do you feel anxious or worried?",
        options: [
            { answerText: 'Never', stressValue: 0 },
            { answerText: 'Sometimes', stressValue: 1 },
            { answerText: 'Frequently', stressValue: 2 },
            { answerText: 'Always', stressValue: 3 }
        ]
    },
];

function SQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [stressScore, setStressScore] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const handleAnswerClick = (stressValue) => {
        setStressScore(stressScore + stressValue);
        setResponses([...responses, stressValue]);
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setProgress(progress + 10);
        } else {
            setShowResults(true);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let totalStressScore = responses.reduce((total, response) => {
            return total + response;
        }, stressScore);
        setStressScore(totalStressScore);
    };

    const handleRetakeQuiz = () => {
        setCurrentQuestion(0);
        setResponses([]);
        setShowResults(false);
        setStressScore(0);
        setProgress(0);
    };

    const renderMilestones = () => {
        const milestones = [];
        for (let i = 0; i < questions.length; i++) {
            milestones.push(<div className="marker" />);
        }
        return milestones;
    };

    const ratingMeterStyle = {
        width: `${stressScore * 3.33}%`,
        height: '20px',
        borderRadius: '10px',
        overflow: 'hidden'
    };

    const handleMusicToggle = () => {
        setIsMusicPlaying(!isMusicPlaying);
    };

    return (

        <div>
            <div className='quiz-container'>
                <h1>QUIZ</h1>
                <div className='music-toggle'>
            {/* Render volume up or volume mute icon based on whether music is playing or not */}
            {isMusicPlaying ? (
                 <FaVolumeUp onClick={handleMusicToggle} />
            ) : (
                <FaVolumeMute onClick={handleMusicToggle} />
            )}
            {/* Rest of the JSX code */}
        </div>
            {isMusicPlaying &&
                <audio autoPlay loop>
                    <source src={relax} type="audio/mpeg" />
                </audio>
            }
                {showResults ? (
                    <div className='results-container'>
                        <h2>Your stress score is {stressScore} out of 30</h2>
                        <div className="rating-meter">
                            <div className="rating-fill" style={ratingMeterStyle}></div>
                        </div>
                        {stressScore <= 10 ? (
                            <p>You have low stress levels. Keep up the good work!</p>
                        ) : stressScore <= 20 ? (
                            <p>You have moderate stress levels. Take steps to reduce stress in your life.</p>
                        ) : (
                            <p>You have high stress levels. Seek professional help and take immediate steps to reduce stress in your life.</p>
                        )}
                        <button className='retake-button' onClick={handleRetakeQuiz}>Retake Quiz</button>
                        <Link to="/techniques"><button className='retake-button'>Methods</button></Link>
                    </div>
                ) : (
                    <>

                        <div className="progress-bar-container">
                            <ul>
                                {renderMilestones().map((marker, index) => (
                                    <li key={index}>{marker}</li>
                                ))}
                            </ul>
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>
                        <h2 className='question'>{questions[currentQuestion].question}</h2>
                        <div className='options-container'>
                            {questions[currentQuestion].options.map((option, index) => (
                                <button key={index} className='option-button' onClick={() => handleAnswerClick(option.stressValue)}>{option.answerText}</button>
                            ))}

                        </div>
                        <form onSubmit={handleFormSubmit}>

                        </form>
                    </>
                )}
            </div>
        </div>

    );
}

export default SQuiz;
