import React from 'react'
import "./herosection.scss"
import hero from "./images/hero.png";
const HeroSection = () => {
  return (
    <div className='heroContainer'>
       <img src={hero}></img>
       <div className='herotext'>
        <div className='heroHeading'>
        Trending now
        </div>
        <div className='heroDesc'>
        Mike’s famous salad with cheese
        </div>
        <div className='chef'>
        By John Mike
        </div>
      
       </div>
      
    </div>
  )
}

export default HeroSection