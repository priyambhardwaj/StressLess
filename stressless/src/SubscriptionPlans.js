import React from 'react';
import "../src/css/SubscriptionPlans.css";
import { Link } from "react-router-dom";
import rel from '../src/images/relief.png';

const Subscription = () => {
  return (
    <div class="subss">
      <h1>Choose a Subscription Plan</h1>
 <div class="subscription-plans">

      
<div class="plan">
  <h2>Basic Plan</h2>
  <p class="price">$300/month</p>
  <ul>
    <li>Access to stress screening questionnaire</li>
    <li>Access to stress relieving techniques</li>
    <li>-</li>
    <li>-</li>
  </ul>
  <a href="#" class="button">Subscribe Now</a>
</div>
<div class="plan">
  <h2>Premium Plan</h2>
  <p class="price">$500/month</p>
  <ul>
    <li>Access to stress screening questionnaire</li>
    <li>Access to stress relieving techniques</li>
    <li>Expert consultations</li>
    <li>Stress relieving games</li>
  </ul>
  <a href="#" class="button">Subscribe Now</a>
</div>
<div class="plan">
  <h2>Corporate Plan</h2>
  <p class="price">$5000/month</p>
  <ul>
    <li>Access to stress screening questionnaire</li>
    <li>Access to stress relieving techniques</li>
    <li>Expert consultations</li>
    <li>Stress relieving games for your entire team</li>
  </ul>
  <a href="#" class="button">Subscribe Now</a>
</div>
</div>
    </div>
   

  );
}

export default Subscription;
