import React from 'react';
import { Link } from "react-router-dom";
import "../src/css/services.css";
import ph from '../src/images/phone.png';
import rel from '../src/images/relief.png';
import reli from '../src/images/reli.png';
import test from '../src/images/test.png';
import exp from '../src/images/expert.png';
import sgame from '../src/images/sgame.png';
import plan from '../src/images/plan.png';



const Services = () => {
  return (
    <div>

      <div class='serv'>
        <h1>Services</h1>
      </div>


      <div class="card-conta">
        <div class="card-lef">
          <img src={test} alt="Right Side" />
        </div>
        <div class="card-ri">
          <h2>Stress Screening</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum justo et augue sagittis lobortis. Maecenas blandit, tortor sit amet hendrerit scelerisque, dolor ipsum varius massa, sit amet blandit sapien odio vel quam. </p>
          <Link to="/stressquiz"><button className='btnnn'>Explore</button></Link>
        </div>
      </div>
      

      <div class="card-conta">
        <div class="card-lef">
          <img src={exp} alt="Right Side" />
        </div>
        <div class="card-ri">
          <h2>Expert Guidance</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum justo et augue sagittis lobortis. Maecenas blandit, tortor sit amet hendrerit scelerisque, dolor ipsum varius massa, sit amet blandit sapien odio vel quam. </p>
          <Link to="/expertGuidance"><button className='btnnn'>Explore</button></Link>
        </div>
      </div>


      <div class="card-conta">
        <div class="card-lef">
          <img src={rel} alt="Right Side" />
        </div>
        <div class="card-ri">
          <h2>Stress-Relieving Techniques</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum justo et augue sagittis lobortis. Maecenas blandit, tortor sit amet hendrerit scelerisque, dolor ipsum varius massa, sit amet blandit sapien odio vel quam. </p>
          <Link to="/techniques"><button className='btnnn'>Explore</button></Link>
        </div>
      </div>


      <div class="card-conta">
        <div class="card-lef">
          <img src={sgame} alt="Right Side" />
        </div>
        <div class="card-ri">
          <h2>Stress-Relieving Games</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum justo et augue sagittis lobortis. Maecenas blandit, tortor sit amet hendrerit scelerisque, dolor ipsum varius massa, sit amet blandit sapien odio vel quam. </p>
          <Link to="/games"><button className='btnnn'>Explore</button></Link>
        </div>
      </div>


      <div class="card-conta">
        <div class="card-lef">
          <img src={plan} alt="Right Side" />
        </div>
        <div class="card-ri">
          <h2>Subscription Plans</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum justo et augue sagittis lobortis. Maecenas blandit, tortor sit amet hendrerit scelerisque, dolor ipsum varius massa, sit amet blandit sapien odio vel quam. </p>
          <Link to="/Subscription"><button className='btnnn'>Explore</button></Link>
        </div>
      </div>




    </div>
  );
}

export default Services;
