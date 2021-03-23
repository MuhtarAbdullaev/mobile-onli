import React from 'react';
import './Index.css';

function Result() {
  return (
    <div className="slider-info__bottom">
      <div className="slider-info__select left-element">
        <div className="slider-info__select-info">
          <div className="slider-info__select-name">
            Налоговая экономия для юр. лиц до
          </div>
          <div className="slider-info__select-price price-element">
            <span>500 000</span>
            <span className="price-element__currency">₽</span>
          </div>
        </div>
        <div className="slider-info__select-icon">^^</div>
      </div>
      <div className="slider-info__result left-element">
        <div className="slider-info__select-info">
          <div className="slider-info__select-name">
            Ежемесячный платеж от
          </div>
          <div className="slider-info__select-price price-element">
            <span>34 154</span>
            <span className="price-element__currency">₽</span>
          </div>
        </div>
        <div className="slider-info__select-result">
          или 999
          {' '}
          <span className="price-element__currency">₽</span>
          {' '}
          в день
        </div>
      </div>
    </div>
  );
}

export default Result;
