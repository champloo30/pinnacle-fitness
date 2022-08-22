import React from 'react'
import "./whyUs.scss";
import tricep from '../../assets/dollar-gill-xr8dWcMjFdI-unsplash.jpg';
import rope from '../../assets/woman-rope.webp';
import chest from '../../assets/anastase-maragos-fG0p4Qh_aWI-unsplash.jpg';
import shoulder from '../../assets/woman-shoulder.jpeg';
import check from '../../assets/check-mark-svgrepo-com.svg';
import adidas from '../../assets/Adidas-White-Logo.wine.svg';
import nike from '../../assets/Nike,_Inc.-Nike-Logo.wine.svg';
import ua from '../../assets/Under_Armour-Logo.wine.svg';

export default function WhyUs() {
  return (
    <div id='why-us' className='why-us'>
        <div className="why-us-container">
            <div className="left">
                <img className='img tricep' src={tricep} alt="" />
                <img className='img rope' src={rope} alt="" />
                <img className='img' src={chest} alt="" />
                <img className='img' src={shoulder} alt="" />
            </div>
            <div className="right">
                <h1><span>why </span>choose us</h1>
                <div className="why-list">
                    <div className="item">
                        <img src={check} alt="" className="check" />
                        <p>over 140+ expert coaches</p>
                    </div>
                    <div className="item">
                        <img src={check} alt="" className="check" />
                        <p>train smarter and safer than before</p>
                    </div>
                    <div className="item">
                        <img src={check} alt="" className="check" />
                        <p>2 free program for new members</p>
                    </div>
                    <div className="item">
                        <img src={check} alt="" className="check" />
                        <p>reliable partners for your journey</p>
                    </div>
                </div>
                <div className="our-partners">
                    <h3>our partners</h3>
                    <div className="partners">
                        <img className='brand' src={adidas} alt="" />
                        <img className='brand' src={nike} alt="" />
                        <img className='brand' src={ua} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
