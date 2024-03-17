import React from 'react'
import images from '../assets/data/carousel';
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <Marquee pauseOnHover speed={80}>
  <div className=' flex items-center justify-center'>
    {images.map((item, index) => (
      <div key={index} className='px-10 py-0 bg-white rounded-2xl shadow-xl my-10 flex mr-10'>
        <img src={item.img_url} alt="image" className='h-32 w-40 object-contain ' />
      </div>
    ))}
    
  </div>
</Marquee>
  )
}

export default Slider