import React from 'react'
import '../feature.css'
//import icons
import icon1 from '../assets/img/1.webp'
import icon2 from '../assets/img/2.png'
import icon3 from '../assets/img/2.webp'
function Feature() {
  return (
    <div className='feature'>
    {/* feature heading */}
    <h1>We list and manage your property on multiple booking platforms</h1>
    {/* feature icons grid */}
    <div className='feature__logo__collection container'>
        {/* icon 1 */}
        <img src={icon1}/>
            {/* icon 1 */}
            <img src={icon2}/>
                {/* icon 1 */}
        <img src={icon3}/>
    </div>
    </div>
  )
}

export default Feature