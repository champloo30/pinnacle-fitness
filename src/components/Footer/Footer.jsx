import React from 'react'
import './footer.scss'
import github from '../../assets/github-svgrepo-com.svg';
import instagram from '../../assets/instagram-svgrepo-com.svg';
import twitter from '../../assets/twitter-svgrepo-com.svg';
import mountain from '../../assets/mountain-svgrepo-com.svg';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="icons">
                <a href="https://github.com/champloo30/pinnacle-fitness" target="_blank" rel="noopener noreferrer"><img src={github} alt="" className="icon" /></a>
                <img src={instagram} alt="" className="icon" />
                <img src={twitter} alt="" className="icon" />
            </div>
            <ul className='footer-list'>
                <li className='footer-item'>
                    <a href="#home">Home</a>
                </li>
                <li className='footer-item'>
                    <a href="#programs">Programs</a>
                </li>
                <li className='footer-item'>
                    <a href="#why-us">Why Us</a>
                </li>
                <li className='footer-item'>
                    <a href="#plans">Plans</a>
                </li>
                <li className='footer-item'>
                    <a href="#testimonials">Testimonals</a>
                </li>
            </ul>
            <div className="logo">
                <img className='mountain' src={mountain} alt="" />
                <h3><span>Pinnacle</span> Fitness</h3>
            </div>
        </div>
    </div>
  )
}
