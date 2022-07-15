import React from 'react'
import "./programs.scss";
import dumbbell from '../../assets/lifting-svgrepo-com.svg';
import running from '../../assets/running-svgrepo-com.svg';
import fire from '../../assets/fire-svgrepo-com.svg';
import muscle from '../../assets/arm-muscles-silhouette-svgrepo-com.svg';
import right from '../../assets/right-arrow-svgrepo-com.svg';

export default function Programs() {
  return (
    <div id='programs' className='programs'>
        <div className="programs-container">
          <h1>climb<span> your mountain</span></h1>
          <h1><span>with some of our </span>programs</h1>
          <div className="program-boxes">
            <div className="box">
              <div className="container">
                <img src={dumbbell} alt="" />
                <span>Body Sculpting</span>
                <p>Lean and cut is the name of the game. Master your own body weight in this program.</p>
                <div className="join">
                  <span>Join Now</span>
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="container">
                <img src={muscle} alt="" />
                <span>Body Building</span>
                <p>More Muscle = More Glory. Build your muscle to the max in this program.</p>
                <div className="join">
                  <span>Join Now</span>
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="container">
                <img src={running} alt="" />
                <span>Stamina Training</span>
                <p>Never be tired again! (Or almost never...) Learn to control your breathing in the program.</p>
                <div className="join">
                  <span>Join Now</span>
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="container">
                <img src={fire} alt="" />
                <span>Weight Loss</span>
                <p>Discipline will be your key to success. In this program, we'll be with you every step of the way.</p>
                <div className="join">
                  <span>Join Now</span>
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
