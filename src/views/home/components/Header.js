import React from 'react';
import './Header.css';
import bg from './images/ipp-landing-bg.png'

export default function Header() {
    return (
        <div className='header'>
            <div class="home-bkg-img">
                <img src={bg} alt="ipp logo"/>
            </div>
            <div class="home-text-on-img">
                <h1>Industry Partners Program</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}