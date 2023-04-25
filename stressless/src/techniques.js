import React from "react";
import "../src/css/techniques.css";
import { Link } from "react-router-dom";

const Techniques = () => {
  return (
    <div className="tech">
      <h1>Stress Relieving Techniques</h1>
      <div className="techniques">
        <div className="tech-card">
          <h2>Low Stress (0 to 10)</h2>
          <p className="price">Relieving methods</p>
          <ol>
            <li>Go for a walk</li>
            <li>Practice deep breathing exercises</li>
            <li>Listen to calming music</li>
            <li>Take a warm bath or shower</li>
            <li>Do some light stretching exercises</li>
          </ol>
        </div>

        <div className="tech-card">
          <h2>Moderate Stress (11 to 20)</h2>
          <p className="price">Relieving methods</p>
          <ol>
            <li>Practice yoga or meditation</li>
            <li>Spend time outdoors in nature</li>
            <li>Write in a journal or practice gratitude</li>
            <li>Talk to a trusted friend or family member</li>
            <li>
              Engage in a creative hobby, such as painting or playing music
            </li>
          </ol>
        </div>

        <div className="tech-card">
          <h2>High Stress (21 to 30)</h2>
          <p className="price">Relieving methods</p>
          <ol>
            <li>
              Practice progressive muscle relaxation or visualization techniques
            </li>
            <li>Seek professional counseling or therapy</li>
            <li>Get regular exercise, such as running or weightlifting</li>
            <li>
              Practice mindfulness or other stress-reducing activities, such as
              tai chi or qi gong
            </li>
            <li>
              Make time for self-care and prioritize relaxation activities, such
              as getting a massage or taking a vacation.
            </li>
          </ol>
        </div>


        <div className="tech-card1">
          <p className="price">
            Relieving exercises (click on the exercise for example)
          </p>
          <ol>
            <li>
              <Link to="https://youtu.be/6ijg6tpyxXg">
                Stretching - stretching your muscles can help relieve tension
                and reduce stress levels.
              </Link>
            </li>
            <li>
              <Link to="https://youtu.be/Wemm-i6XHr8">
                Deep Breathing - slow, deep breathing can help reduce stress and
                promote relaxation.
              </Link>
            </li>
            <li>
              <Link to="https://youtu.be/qiKJRoX_2uo">
                Yoga - gentle yoga poses can help release tension in the body
                and promote relaxation.
              </Link>
            </li>
          </ol>
          <a href="#" className="button">
            Subscribe Now
          </a>
        </div>


        <div className="tech-card1">
          <p className="price">
            Relieving exercises (click on the exercise for example)
          </p>
          <ol>
            <li>
              <Link to="https://youtu.be/6ijg6tpyxXg">
                Cardiovascular Exercise - activities like running, cycling, or
                swimming can help release endorphins, which can reduce stress
                levels.
              </Link>
            </li>
            <li>
              <Link to="https://youtu.be/Wemm-i6XHr8">
                Progressive Muscle Relaxation - this technique involves tensing
                and relaxing specific muscle groups to help reduce tension and
                stress.
              </Link>
            </li>
            <li>
              <Link to="https://youtu.be/qiKJRoX_2uo">
                Mindfulness Meditation - this type of meditation involves paying
                attention to the present moment and focusing on breathing, which
                can help calm the mind and reduce stress.
              </Link>
            </li>
          </ol>
          <a href="#" className="button">
            Subscribe Now
          </a>
        </div>

        <div className="tech-card1">
          <p className="price">
            Relieving exercises (click on the exercise for example)
          </p>
          <ol>
            <li>
              <Link to="https://youtu.be/6ijg6tpyxXg">
                Tai Chi - this gentle form of exercise can help reduce stress
                and anxiety, while also improving balance and flexibility.
              </Link>
            </li>
            <li>
              <Link to="https://youtu.be/Wemm-i6XHr8">
                Guided Imagery - this technique involves imagining a peaceful
                scene or experience, which can help reduce stress and promote
                relaxation.
              </Link>
            </li>
            <li>
              <Link to="https://youtu.be/qiKJRoX_2uo">
                Acupuncture - this traditional Chinese medicine practice
                involves inserting thin needles into specific points on the body
                to promote healing and relaxation.
              </Link>
            </li>
          </ol>
          <a href="#" className="button">
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Techniques;
