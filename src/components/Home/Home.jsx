import React from 'react'
import './home.scss';
import runningWoman from '../../assets/pngwing.com.png';

export default function Home() {
  return (
    <div className='home'>
      <div className="home-container">
        <div className="left">
          <div className="top-slider">
            <h4>the best fitness for your best body</h4>
          </div>
          <h1><span>conquer</span> yourself</h1>
          <h1>achieve your <span>pinnacle</span></h1>
          <p>Your pinnacle body is just on the other side of you!</p>
          <div className="subcat">
            <div className="subcat-box">
              <h3>+ 140</h3>
              <h4>expert coaches</h4>
            </div>
            <div className="subcat-box">
              <h3>+ 978</h3>
              <h4>members joined</h4>
            </div>
            <div className="subcat-box">
              <h3>+ 50</h3>
              <h4>fitness programs</h4>
            </div>
          </div>
          <div className="home-btns">
            <button className='btn'>
              <a href="#plans">Get Started</a>
            </button>
            <button className='btn'>Learn More</button>
          </div>
        </div>
        <div className="right">
          <img className='running-woman' src={runningWoman} alt="" />
        </div>
      </div>
    </div>
  )
}
