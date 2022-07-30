import React from 'react'
import './navbar.scss';
import mountain from '../../assets/mountain-svgrepo-com.svg'

export default function Navbar() {
  return (
    <div id='home' className='navbar'>
        <div className="navbar-container">
            <div className="left">
                <div className="logo">
                    <img src={mountain} alt="" />
                    <h3><span>Pinnacle</span> Fitness</h3>
                </div>
            </div>
            <div className="center">
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#programs">Programs</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#why-us">Why Us</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#plans">Plans</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#testimonials">Testimonals</a>
                    </li>
                </ul>
            </div>
            <div className="right">
                <button className='btn'>
                    <a href="#testimonials">Join Now</a>
                </button>
            </div>
        </div>
    </div>
  )
}
