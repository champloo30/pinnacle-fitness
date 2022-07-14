import React from 'react'
import './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="left">
                <div className="logo">
                    <h3>Pinnacle Fitness</h3>
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
                        <a href="#testimonals">Testimonals</a>
                    </li>
                </ul>
            </div>
            <div className="right">
                <button className='btn'>
                    <a href="#contact">Join Now</a>
                </button>
            </div>
        </div>
    </div>
  )
}
