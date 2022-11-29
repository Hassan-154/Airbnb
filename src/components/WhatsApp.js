import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
function WhatsApp() {
  return (
    <div className='whatsapp__cover' id='contact'>
        <div className='whatsapp container'>
    <div className='whatsapp__text'>
<h2>Escape To Seanic Beauty This Season</h2>
<p>A city brimming with people from all walks of life. A wonderful city with lush green trees, open spaces and a centre point for people travelling to the Nothern Areas of Pakistan. Islamabad itself offers scenic views from mountains to lake view parks, museums, motor sports, and shopping centres.</p>
    </div>
     <div className='whatsApp__button'>

     <a href="#" style={{backgroundColor: 'rgb(240, 240, 60)', width: '240px'}} className="btn px-4 py-3 text-white d-flex align-items-center justify-content-between">
                <span>BOOK NOW</span>
       <BsWhatsapp color='white' size={23} className="whatsApp__icon" />
              </a>
    </div>
    </div> 
    </div>
  )
}

export default WhatsApp