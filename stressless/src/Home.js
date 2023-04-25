import React from 'react';
import '../src/css/home.css';
import hum1 from '../src/images/human.png';

import { Link } from 'react-router-dom';




function HomePage() {
  return (
    <div>

      <main>
        <section className="my-section">
          <div className="hero">
            <h2>Take Control of Your</h2>
            <h1>STRESS</h1>
            <Link to='/stressquiz'><button>Take the Questionnaire</button></Link>
          </div>
          <div className="right-section">
            <img src={hum1} alt="Image description" />
          </div>
        </section>

        <section className="about">
          <h2>About Us</h2>
          <p>We are a team of experts dedicated to helping you manage your stress and live your best life.</p>
          <p>Our website provides a range of services to help you identify and manage your stress levels.</p>
        </section>


        <section className="services" style={{ backgroundColor: '#86C6EE' }}>
          <h1>Our Services</h1>
          <div className="services-grid">
            <div className="card">
              <h3>Stress Screening Questionnaire</h3>
              <p>Take our stress screening questionnaire to determine your stress levels and get personalized stress management advice.</p>
              <div className="card-btn">
                <Link to="/stressquiz"><button>Learn More</button></Link>
              </div>
            </div>
            <div className="card">
              <h3>Stress Relieving Techniques</h3>
              <p>Learn various stress-relieving techniques to manage your stress levels and improve your mental health.</p>
              <div className="card-btn">
                <Link to="/techniques"><button>Learn More</button></Link>
              </div>
            </div>
            <div className="card">
              <h3>Expert Consultations</h3>
              <p>Consult with our team of experts for personalized stress management advice and guidance.</p>
              <div className="card-btn">
                <Link to="/expertGuidance"><button>Learn More</button></Link>
              </div>
            </div>
            <div className="card">
              <h3>Stress Relieving Games</h3>
              <p>Play stress-relieving games to reduce your stress levels and improve your mood.</p>
              <div className="card-btn">
                <Link to="/stressquiz"><button>Learn More</button></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" >
          <h2>Testimonials</h2>
          <div className="grid1">
            <div className="testimonial-row">
              <div className="testimonial-card"><div className="card1">
                <img src="https://via.placeholder.com/150" alt="John" />
                <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
              </div></div>
              <div className="testimonial-card"><div className="card1">
                <img src="https://via.placeholder.com/150" alt="John" />
                <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
              </div></div>
              <div className="testimonial-card"><div className="card1">
                <img src="https://via.placeholder.com/150" alt="John" />
                <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
              </div></div>
              <div className="testimonial-card"><div className="card1">
                <img src="https://via.placeholder.com/150" alt="John" />
                <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
              </div></div>
              
              
            </div>
          </div>
        </section>






        <section className="blog-section">
          <h2>Latest Blog Posts</h2>
          <div className="card2-container">
            <div className="card2">
              <img src="https://raw.githubusercontent.com/alaattinerby/Kodluyoruz-Work02-Blog-Cards/main/Work02/img/card2.png" alt="First Card" />
              <h3>5 Ways to Reduce Stress at Work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tortor nunc, eget blandit nulla commodo eu.</p>
              <a href="#">Read More -</a>
            </div>
            <div className="card2">
              <img src="https://raw.githubusercontent.com/alaattinerby/Kodluyoruz-Work02-Blog-Cards/main/Work02/img/card2.png" alt="Second Card" />
              <h3>The Benefits of Mindfulness Meditation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tortor nunc, eget blandit nulla commodo eu.</p>
              <a href="#">Read More -</a>
            </div>
            <div className="card2">
              <img src="https://raw.githubusercontent.com/alaattinerby/Kodluyoruz-Work02-Blog-Cards/main/Work02/img/card2.png" alt="Third Card" />

              <h3>How to Improve Your Sleep Quality</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tortor nunc, eget blandit nulla commodo eu.</p>
              <a href="#">Read More -</a>
            </div>
          </div>
        </section>

        <section className="subscription-section">
          <h2>Subscription Plans</h2>
          <p>Subscribe to our premium services and get access to personalized stress management advice and expert consultations.</p>
          <Link to="/subscription"><button>Subscribe Now</button></Link>
        </section>

      </main>
      
    </div>
  );
}

export default HomePage;
