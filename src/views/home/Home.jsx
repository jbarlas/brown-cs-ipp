import React from 'react'
import './Home.css';
import bg from './images/ipp-landing-bg.png'

export default function Home() {
  return (
    <div className="home">
      <div className="home-bkg-img">
        <img src={bg} alt="ipp logo"/>
      </div>
    </div>
  )
}
