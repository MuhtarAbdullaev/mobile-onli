import React from 'react';
import PropTypes from 'prop-types';
import './Index.css';

function Info({
  title, price, minPrice, maxPrice,
}) {
  return (
    <div className="slider-info__top">
      <div className="calc-em">
        <div className="calc-em__top left-element">
          <div className="calc-em__title">{title}</div>
          <div className="calc-em__price">
            <div className="calc-em__price-left price-element">
              <span>{price}</span>
              <span className="price-element__currency">₽</span>
            </div>
            <div className="calc-em__price-right">
              {minPrice}
            </div>
          </div>
          <div className="calc-em__range">
            <input type="range" id="volume" name="volume" min={minPrice} max={maxPrice} />
          </div>
        </div>
        <div className="calc-em__bottom">
          <span>{minPrice}</span>
          <span>{maxPrice}</span>
        </div>
      </div>
    </div>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  minPrice: PropTypes.string.isRequired,
  maxPrice: PropTypes.string.isRequired,
};

export default Info;
