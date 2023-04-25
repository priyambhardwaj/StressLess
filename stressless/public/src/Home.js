import React from 'react';
import './home.css';


function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="AboutSection.js">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Subscribe</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <section id="hero">
        <div className="hero-container">
            <h1>Welcome to our stress management website</h1>
            <p>Take our stress screening questionnaire and get customized stress management solutions</p>
        <a href="#services" className="btn-get-started">Get Started</a>
        </div>
        </section>
        <section className="hero">
          <h1>Take Control of Your Stress</h1>
          <p>Take our stress screening questionnaire and get personalized stress management advice.</p>
          <button>Take the Questionnaire</button>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>We are a team of experts dedicated to helping you manage your stress and live your best life. Our website provides a range of services to help you identify and manage your stress levels.</p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Stress Screening Questionnaire</li>
            <li>Stress Relieving Techniques</li>
            <li>Expert Consultations</li>
            <li>Stress Relieving Games</li>
          </ul>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
          <p>"I highly recommend this website to anyone looking to improve their mental well-being." - Sarah</p>
        </section>
        <section className="blog-section">
          <h2>Latest Blog Posts</h2>
          <ul>
            <li><a href="#">5 Ways to Reduce Stress at Work</a></li>
            <li><a href="#">The Benefits of Mindfulness Meditation</a></li>
            <li><a href="#">How to Improve Your Sleep Quality</a></li>
          </ul>
          <button>Read More</button>
        </section>
        <section className="subscription-section">
          <h2>Subscription Plans</h2>
          <p>Subscribe to our premium services and get access to personalized stress management advice and expert consultations.</p>
          <button>Subscribe Now</button>
        </section>

      </main>
      <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default HomePage;
