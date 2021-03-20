import auto_logo from './img/auto_logo.png';
import auto from './img/auto.png';
import './App.css';

function App() {
  return (
    <div className="app">
     <div className="slider">
        <div className="slider__logo">
         <img src={auto_logo}/>
        </div>
        <div className="slider__img">
          <img src={auto}/>
        </div>
     </div>
     <div className="slider-info">
        <div className="slider-info__top">
            <div className="calc-em">
              <div className="calc-em__top left-element">
                  <div className="calc-em__title">Цена Hyundai Solaris:</div>
                  <div className="calc-em__price">
                    <div className="calc-em__price-left price-element">
                        <span>500 000</span>
                        <span className="price-element__currency">₽</span>
                    </div>
                    <div className="calc-em__price-right">

                    </div>
                  </div>
                  <div className="calc-em__range">
                  <input type="range" id="volume" name="volume" min="0" max="100" /* value="50" *//>
                  </div>
              </div>
              <div className="calc-em__bottom">
                  <span>500 000</span>
                  <span>1 500 000</span>
              </div>
            </div>
            <div className="calc-em">
              <div className="calc-em__top left-element">
                  <div className="calc-em__title">Первоначальный взнос:</div>
                  <div className="calc-em__price">
                    <div className="calc-em__price-left price-element">
                        <span>50 000</span>
                        <span className="price-element__currency">₽</span>
                    </div>
                    <div className="calc-em__price-right">
                    10%
                    </div>
                  </div>
                  <div className="calc-em__range">
                  <input type="range" id="volume" name="volume" min="0" max="100" /* value="50" *//>
                  </div>
              </div>
              <div className="calc-em__bottom">
                  <span>10%</span>
                  <span>49%</span>
              </div>
            </div>
            <div className="calc-em">
              <div className="calc-em__top left-element">
                  <div className="calc-em__title">Срок лизинга:</div>
                  <div className="calc-em__price">
                    <div className="calc-em__price-left price-element">
                        <span>3 года</span>
                        <span className="price-element__currency">₽</span>
                    </div>
                    <div className="calc-em__price-right">

                    </div>
                  </div>
                  <div className="calc-em__range">
                  <input type="range" id="volume" name="volume" min="0" max="100" /* value="50" *//>
                  </div>
              </div>
              <div className="calc-em__bottom">
                  <span>1 мес</span>
                  <span>4 года</span>
              </div>
            </div>
        </div>
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
              или 999 <span className="price-element__currency">₽</span> в день
              </div>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
