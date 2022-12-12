import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import AllRight from './AllRight';
function WhatsApp() {
  return (
 <div>
    <div className='whatsapp__cover' id='contact'>

<div className='whatsApp__button' data-aos="fade-left" data-aos-duration="800">

<a target="_blank" href="https://api.whatsapp.com/send?phone=&text="  style={{backgroundColor: 'rgb(240, 240, 60)', width: '240px'}} className="btn px-4 py-3 text-white d-flex align-items-center justify-content-between">
           <span>Contact Now</span>
  <BsWhatsapp color='white' size={28} className="whatsApp__icon" />
         </a>
</div>
</div>
 </div>
  )
}

export default WhatsApp