import React from 'react';
import '../src/css/about.css';
import hum from '../src/images/human.png';
import hello from '../src/images/hello.png';
import team from '../src/images/team.png';
import game from '../src/images/game.png';
import video from '../src/images/video.png';
import Confetti from 'react-confetti';


function AboutUs() {
    return (
        <div>
            <div class='aboutus'>
                <h1>About Us</h1>
            </div>


            <section className="my-section2">
                <div className="hero2">
                    <p>Welcome to StressLess, your one-stop solution for stress relieving. Our goal is to help people to cop-up with their stress and overcome the challenges they face related to their personal lives, education, family, or finances.</p>
                </div>
                <div className="right-section2">
                    <img src={hello} alt="Image description" />
                </div>
            </section>


            <section className="my-section1">
                <div className="hero3">
                    <img src={team} alt="Image description" />
                </div>
                <div className="right-section1">
                    <p>Our team of experts has designed a stress screening questionnaire that comprises 10 questions. Based on the user's responses, our algorithm generates a score that helps them understand their stress levels and take necessary steps to reduce stress.</p>
                </div>
            </section>


            <section className="my-section2">
                <div className="hero2">
                <p>In addition to stress screening, we provide various stress relief techniques such as games, meditation, and breathing exercises that help users relax and cope with stress. Our website also features a subscription plan that gives users access to premium membership and additional stress relief tools.</p>
                </div>
                <div className="right-section2">
                <img src={game} alt="Image description" />
                </div>
            </section>


            <section className="my-section1">
                <div className="hero3">
                    <img src={video} alt="Image description" />
                </div>
                <div className="right-section1">
                <p>We understand that sometimes it's difficult to deal with stress on your own, so we have also included a feature where users can communicate with experts via video call or chat sessions. Our experts provide personalized guidance and advice to help users overcome their stress-related problems.</p>
                </div>
            </section>


            <div className="confetti-section">
                <Confetti />
            </div>
            <section className="new-section">
                    <p>At StressLess, we are committed to helping you lead a stress-free life. Thank you for choosing us!</p>
            </section>
            
            


        </div>


    );
}

export default AboutUs;