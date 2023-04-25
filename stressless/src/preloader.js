import React from 'react';
import '../src/css/preloader.css';
import pre from '../src/images/preloader.gif';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img className="preloader" src={pre} alt="Loading..." />
    </div>
  );
};

export default Preloader;