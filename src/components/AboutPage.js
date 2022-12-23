import React from 'react'
import img from '../assets/img/about us.png'
function AboutPage() {
  return (
    <div id='about' className='about__page'>
    <div className="container my-5">
      <div className="about__page__grid">
        <div className="about__pic" data-aos="fade-right" data-aos-duration="800">
          <img src={img} className="w-100" alt="" />
        </div>
        <div className="about__text" data-aos="fade-left" data-aos-duration="800">
          <h1 className="h2 mb-2" style={{fontWeight: 600, color: "black"}}>About Us</h1>
          <p className="" style={{lineHeight: 2}}>We provide Airbnb management services and take care of everything, so you can relax and dont worry about anything. From Checkin to Checkout, we manage all the things and take your all pain out of it. We are managing more than 250 properties in <span>Islamabad</span>, <span>Lahore</span>, <span>Dubai</span>, <span>Jeddah and Doha</span>. </p>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutPage