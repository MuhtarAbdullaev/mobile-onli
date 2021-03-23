import React from 'react';
import autoLogo from './img/autoLogo.png';
import auto from './img/auto.png';
import './Index.css';

function Slider() {
  return (
    <div className="slider">
      <div className="slider__logo">
        <img alt="autoLogo" src={autoLogo} />
      </div>
      <div className="slider__img">
        <img alt="auto" src={auto} />
      </div>
    </div>
  );
}

export default Slider;
