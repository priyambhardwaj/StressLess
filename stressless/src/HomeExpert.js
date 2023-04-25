import React, { useState, useEffect } from 'react';
import '../src/css/homeexpert.css';
import exph from '../src/images/experthome.png';
import hum1 from '../src/images/human.png';
import { Link } from 'react-router-dom';

function HomePageExpert() {
  const [newVideoCall, setNewVideoCall] = useState(null);

  useEffect(() => {
    // Fetch newVideoCall details from API
    fetch('http://127.0.0.1:5001/schedule', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewVideoCall(data.videoCalls)
      })
      .catch(error => console.error('Error fetching newVideoCall:', error));
  }, []);


  return (
    <div>
      {/* Render newVideoCall details
      {newVideoCall && (
        newVideoCall.map((item) => (
          <section className="new-video-call">
            <h2>New Video Call</h2>
            <p>Name: {item.name}</p>
            <p>Time: {item.time}</p>
            <p>Date: {item.date}</p>
            <p>Code: {item.code}</p>
          </section>
        ))

      )} */}

      <main>
        {/* Render scheduled meetings */}
       
        <section className="my-section">
          <div className="schedule">
            <h2>Scheduled Meetings</h2>
           
            <table>
            {newVideoCall && (
        newVideoCall.map((item) => (
              <thead>
                <tr>
                  <th>Name: {item.name}</th>
                  <th>Time: {item.time}</th>
                  <th>Date: {item.date}</th>
                  <th>Code: {item.roomCode}</th>
                </tr>
              </thead>
              ))
              )}
            </table>

            <div className='expert-video'>
            <Link to="/newvc"><button>Join Session</button></Link>
              </div> 
            
          </div>
          <div className="right-section-exp">
            <img src={exph} alt="Image description" />
          </div>
        </section>
      

        <section className="about">
          <h2>About Us</h2>
          <p>We are a team of experts dedicated to helping you manage your stress and live your best life.</p>
          <p1>Our website provides a range of services to help you identify and manage your stress levels.</p1>
        </section>


        <section className="services" style={{ backgroundColor: '#86C6EE' }}>
          <h1>Our Services</h1>
          <div className="services-grid">
            <div className="card">
              <h3>Stress Screening Questionnaire</h3>
              <p>Take our stress screening questionnaire to determine your stress levels and get personalized stress management advice.</p>
            </div>
            <div className="card">
              <h3>Stress Relieving Techniques</h3>
              <p>Learn various stress-relieving techniques to manage your stress levels and improve your mental health.</p>
            </div>
            <div className="card">
              <h3>Expert Consultations</h3>
              <p>Consult with our team of experts for personalized stress management advice and guidance.</p>
            </div>
            <div className="card">
              <h3>Stress Relieving Games</h3>
              <p>Play stress-relieving games to reduce your stress levels and improve your mood.</p>
            </div>
          </div>
        </section>

        <section class="testimonials" >
          <h2>Testimonials</h2>
          <div class="grid1">
            <div class="testimonial-row">
              <div class="testimonial-card"><div class="card1">
                <img src="https://via.placeholder.com/150" alt="John" />
                <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
              </div></div>
              <div class="testimonial-card"><div class="card1">
                <img src="https://via.placeholder.com/150" alt="John" />
                <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
              </div></div>
              <div class="testimonial-card"><div class="card1">
                <img src="https://via.placeholder.com/150" alt="John" />
                <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
              </div></div>
              <div class="testimonial-card"><div class="card1">
                <img src="https://via.placeholder.com/150" alt="John" />
                <p>"This website changed my life. I am now able to manage my stress levels and live a more fulfilling life." - John</p>
              </div></div>


            </div>
          </div>
        </section>






        <section className="blog-section">
          <h2>Latest Blog Posts</h2>
          <div class="card2-container">
            <div class="card2">
              <img src="https://raw.githubusercontent.com/alaattinerby/Kodluyoruz-Work02-Blog-Cards/main/Work02/img/card2.png" alt="First Card" />
              <h3>5 Ways to Reduce Stress at Work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tortor nunc, eget blandit nulla commodo eu.</p>
              <a href="#">Read More -</a>
            </div>
            <div class="card2">
              <img src="https://raw.githubusercontent.com/alaattinerby/Kodluyoruz-Work02-Blog-Cards/main/Work02/img/card2.png" alt="Second Card" />
              <h3>The Benefits of Mindfulness Meditation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tortor nunc, eget blandit nulla commodo eu.</p>
              <a href="#">Read More -</a>
            </div>
            <div class="card2">
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

        {/* ... */}
      </main>
    </div>
  );
}

export default HomePageExpert;
