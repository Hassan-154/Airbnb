import React from 'react'

function AboutPage() {
  return (
    <div id='about' className='about__page'>
    <div className="container my-5">
      <div className="about__page__grid">
        <div className="about__pic" data-aos="fade-right" data-aos-duration="800">
          <img src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100" alt="" />
        </div>
        <div className="about__text" data-aos="fade-left" data-aos-duration="800">
          <h1 className="h2 mb-2" style={{fontWeight: 600, color: "black"}}>About Us</h1>
          <p className="" style={{lineHeight: 2}}>we provide airbnb management services and take care of everything, so you can relax and dont worry about anything. From Checkin to Checkout, we manage all the things and take your all pain out of it. We are managing more than 250 properties in Islamabad, Lahore, Dubai, Jeddah and Doha. </p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutPage