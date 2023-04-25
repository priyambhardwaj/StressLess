import React from 'react';
import { Link } from 'react-router-dom';
import '../src/css/ExpertGuidance.css';
import doc from '../src/images/Doc.jpg';
import cal from '../src/images/Calendar.png';
import vc from '../src/images/vc.png';

function ExpertGuidance() {
  return (
    <div className='experts'>
      <h1>Expert Guidance</h1>
      <p>Our experts are highly qualified in their respective fields and have years of experience helping people deal with stress and anxiety.</p>
      <p1> They are here to provide you with the support and guidance you need to improve your mental health and well-being.</p1>
     
     <div className='majorcard'>
     <h2>Our Experts</h2>
      <div className="card-deck-expert">
        <div className="card-expert">
          <img className="card-expert-img-top" src={doc} alt="Dr. John Smith" />
          <div className="card-expert-body">
            <h5 className="card-expert-title">Dr. John Smith</h5>
            <p className="card-expert-text">Ph.D. in Psychology</p>
          </div>
        </div>
        <div className="card-expert">
          <img className="card-expert-img-top" src={doc} alt="Dr. Jane Doe" />
          <div className="card-expert-body">
            <h5 className="card-expert-title">Dr. Jane Doe</h5>
            <p className="card-expert-text">M.D. in Psychiatry</p>
          </div>
        </div>
        <div className="card-expert">
          <img className="card-expert-img-top" src={doc} alt="Dr. Mark Johnson" />
          <div className="card-expert-body">
            <h5 className="card-expert-title">Dr. Mark Johnson</h5>
            <p className="card-expert-text">Ph.D. in Neuroscience</p>
          </div>
        </div>
      </div>
      </div>

      <div className='card-expert-buttons'>
        <h2>Get Expert Help</h2>
        <div className="button-row">
          <div className="button-left">
            <img className="button-img" src={cal} alt="calendar" style={{ float: 'left' }} />
            <p>To schedule a video call with one of our experts, click below:</p>
            <Link to="/schedulevc"><button>Schedule a Video Call</button></Link>
          </div>
          <div className="button-right">
            <img className="button-img" src={vc} alt="calendar" style={{ float: 'left' }} />
            <p>To join a scheduled video call, click below.</p>
            <Link to="/newvc"><button>Join Video Call Room</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertGuidance;
