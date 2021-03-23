import React from 'react';
import Info from './Components/Info/Index';
import Slider from './Components/Slider/Index';
import Result from './Components/Result/Index';
import './App.css';

function App() {
  return (
    <div className="app">
      <Slider />
      <div className="slider-info">
        <Info
          title="Цена Hyundai Solaris:"
          price="500000"
          minPrice="100"
          maxPrice="500"
        />
        <Info
          title="Первоначальный взнос:"
          price="50000"
          minPrice="10"
          maxPrice="50"
        />
        <Info
          title="Срок лизинга:"
          price="3"
          minPrice="1"
          maxPrice="5"
        />
        <Result />
      </div>
    </div>
  );
}

export default App;
