import React, { useState } from 'react'
import './testimonials.scss';
import leftArrow from '../../assets/left-arrow-svgrepo-com.svg';
import Bailey from '../../assets/bailey-burton-MzYunAOcpWU-unsplash.jpg';
import Tim from '../../assets/timothy-barlin-FKT0rzwhUsM-unsplash.jpg';
import Anam from '../../assets/anamnesis33-OVqVu4c-1yU-unsplash.jpg';

export default function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: 'matthew hendrickson',
            job: 'entrepreneur',
            description: 'I made the right choice by choosing Pinnacle Fitness. They found the right plan and program that fit me and my schedule perfectly!',
            img: Bailey
        },
        {
            id: 2,
            name: 'jason kelvin',
            job: 'trainer',
            description: 'Working here is so much fun and effecient! All the equipment is top of the line and all the staff, no matter the postion, care so much for the members and facility.',
            img: Tim
        },
        {
            id: 3,
            name: 'marin anam',
            job: 'athlete',
            description: "The have great ranges in programs and they're all tailored to the specific person, no matter the age or expreience.",
            img: Anam
        }
    ];

    const [ activeIndex, setActiveIndex ] = useState(0);
    const activeCard = testimonials[activeIndex];

    let handleNext = () => {
        if (activeIndex >= testimonials.length - 1){
            setActiveIndex(0)
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1)
        }
    }

    let handlePrev = () => {
        if (activeIndex <= 0){
            setActiveIndex(testimonials.length - 1)
        } else {
            setActiveIndex((oldIndex) => oldIndex - 1)
        }
    }

  return (
    <div id='testimonials' className='testimonials'>
        <div className="testimonials-container">
            <h1>what they <span>say about us</span></h1>
            <div className="wrapper">
                <div className="card">
                    <div className="left">
                        <p>{activeCard.description}</p>
                        <p><span>{activeCard.name}</span> - {activeCard.job}</p>
                    </div>
                    <div className="right">
                        <div className="arrows">
                            <img src={leftArrow} alt="" className="left-arrow" onClick={handlePrev} />
                            <img src={leftArrow} alt="" className="right-arrow" onClick={handleNext} />
                        </div>
                        <div className="picture-container">
                            <div className="square1"></div>
                            <div className="square2"></div>
                            <img src={activeCard.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="sign-up">
                <h2>ready to <span>rise to your pinnacle</span> with us</h2>
                <form className='form'>
                    <input className='text' type="email" placeholder='Enter you email here' required />
                    <input className='btn' type="button" value="Join Now" />
                </form>
            </div>
        </div>
    </div>
  )
}
