import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CircleCrousel() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      };
      
  return (
   <>
   <Slider {...sliderSettings} className=' rounded-full border-2 p-10 border-white w-full aspect-square'>
    <div className='w-full h-full !flex flex-col items-center justify-center aspect-square text-white'>
      <h1 className='text-5xl mb-1 text-center font-extrabold'>Event 1</h1>
      <p className='text-center text-gray-300'>Tagline of this particular event</p>
      </div>  
    <div className='w-full h-full !flex flex-col items-center justify-center aspect-square text-white'>
      <h1 className='text-5xl mb-1 text-center font-extrabold'>Event 2</h1>
      <p className='text-center text-gray-300'>Tagline of this particular event</p>
      </div>  
    <div className='w-full h-full !flex flex-col items-center justify-center aspect-square text-white'>
      <h1 className='text-5xl mb-1 text-center font-extrabold'>Event 3</h1>
      <p className='text-center text-gray-300'>Tagline of this particular event</p>
      </div>  
    <div className='w-full h-full !flex flex-col items-center justify-center aspect-square text-white'>
      <h1 className='text-5xl mb-1 text-center font-extrabold'>Event 4</h1>
      <p className='text-center text-gray-300'>Tagline of this particular event</p>
      </div>  
    
  </Slider>
   
   </>
  )
}

export default CircleCrousel
