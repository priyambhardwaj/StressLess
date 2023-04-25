import React from "react";
import "../src/css/footer.css"; 
import logo from '../src/images/new.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pg-footer">
    <footer className="footer">
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className="footer-content">
        <div className="footer-content-column">
          <div className="footer-logo">
            <a className="footer-logo-link" href="/">
              <span className="hidden-link-text">LOGO</span>
              <img src={logo}></img>
              <h1>StressLess</h1>
            </a>
          </div>
          <div className="footer-menu">
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Pages</h2>
            <ul id="menu-company" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
               <Link to={"/"}><button >Home</button></Link>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
              <Link to={"/about"}><button >About</button></Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link to={"/Services"}><button >Services</button></Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link to={"/community"}><button >Community</button></Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link to={"/Subscription"}><button >Subscription</button></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
  <h2 className="footer-menu-name">Social Media</h2>
  <ul id="menu-quick-links" className="footer-menu-list">
  <li className="menu-item menu-item-type-custom menu-item-object-custom">
    <Link to={"/"}><FontAwesomeIcon icon={faInstagram} style={{color: "#E1306C"}} />  Instagram</Link>
  </li>
  <li className="menu-item menu-item-type-custom menu-item-object-custom">
    <Link to={"/"}><FontAwesomeIcon icon={faTwitter} style={{color: "#1DA1F2"}} />  Twitter</Link>
  </li>
  <li className="menu-item menu-item-type-post_type menu-item-object-page">
    <Link to={"/"}><FontAwesomeIcon icon={faGithub} style={{color: "#24292e"}} />  GitHub</Link>
  </li>
  <li className="menu-item menu-item-type-post_type menu-item-object-page">
    <Link to={"/"}><FontAwesomeIcon icon={faYoutube} style={{color: "#FF0000"}} />  Youtube</Link>
  </li>
</ul>

</div>
        </div>
        <div className="footer-content-column">
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> © Copyright</h2>
            <p className="footer-call-to-action-description"> Made by Risha & Priyam</p>

          </div>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
