import React from 'react'
import './testimonials.scss';
import leftArrow from '../../assets/left-arrow-svgrepo-com.svg';
import Bailey from '../../assets/bailey-burton-MzYunAOcpWU-unsplash.jpg';

export default function Testimonials() {
  return (
    <div className='testimonials'>
        <div className="testimonials-container">
            <h1>what they <span>say about us</span></h1>
            <div className="wrapper">
                <div className="card">
                    <div className="left">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non.</p>
                        <p>matthew hendrickson <span>- entrepreneur</span></p>
                    </div>
                    <div className="right">
                        <div className="arrows">
                            <img src={leftArrow} alt="" className="left-arrow" />
                            <img src={leftArrow} alt="" className="right-arrow" />
                        </div>
                        <div className="picture-container">
                            <div className="square1"></div>
                            <div className="square2"></div>
                            <img src={Bailey} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
