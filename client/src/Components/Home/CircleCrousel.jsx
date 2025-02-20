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
   <Slider {...sliderSettings} className=' rounded-3xl lg:rounded-full h-48 lg:h-auto border-2 p-10 border-white w-full lg:aspect-square'>
    <div className='w-full lg:h-full !flex flex-col items-center justify-center lg:aspect-square text-white'>
      <h1 className='text-4xl mb-1 text-center font-extrabold'>Challenge X</h1>
      <p className='text-center text-gray-300'>Stop Talking, Start Winning</p>
      </div>  
    <div className='w-full lg:h-full !flex flex-col items-center justify-center lg:aspect-square text-white'>
      {/* <h1 className='text-5xl mb-1 text-center font-extrabold'></h1> */}
      <p className='text-center text-gray-300'>More Events Are incomming</p>
      </div>  
    {/* <div className='w-full lg:h-full !flex flex-col items-center justify-center lg:aspect-square text-white'>
      <h1 className='text-5xl mb-1 text-center font-extrabold'>Event 3</h1>
      <p className='text-center text-gray-300'>Tagline of this particular event</p>
      </div>  
    <div className='w-full lg:h-full !flex flex-col items-center justify-center lg:aspect-square text-white'>
      <h1 className='text-5xl mb-1 text-center font-extrabold'>Event 4</h1>
      <p className='text-center text-gray-300'>Tagline of this particular event</p>
      </div>   */}
    
  </Slider>
   
   </>
  )
}

export default CircleCrousel
