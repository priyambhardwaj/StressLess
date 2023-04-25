import React from 'react';

function ServicesSection() {
  return (
    <section className="services">
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="service">
          <img src="/images/stress-screening.jpg" alt="Stress Screening" />
          <h3>Stress Screening</h3>
          <p>Our stress screening questionnaire identifies potential sources of stress and provides recommendations for managing stress.</p>
        </div>
        <div className="service">
          <img src="/images/stress-relieving-techniques.jpg" alt="Stress Relieving Techniques" />
          <h3>Stress Relieving Techniques</h3>
          <p>We offer a variety of stress-relieving techniques, including guided meditations, breathing exercises, and stress-relieving games.</p>
        </div>
        <div className="service">
          <img src="/images/expert-consultations.jpg" alt="Expert Consultations" />
          <h3>Expert Consultations</h3>
          <p>Our website provides video call and chat features for users to communicate with stress management experts and receive personalized advice.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
