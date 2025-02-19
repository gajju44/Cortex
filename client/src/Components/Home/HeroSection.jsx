// import React from 'react'
import Navbar from '../Navbar/Navbar'
import Iridescence from './Iridescence'
import CircleCrousel from './CircleCrousel';
import ReactLogo from '../../assets/React.svg'
import ChallangeX from '../../assets/Events/ChallangeX.svg'
import { ArrowUpRight } from 'lucide-react';
import CornerSvg from '../../assets/CornerSvg.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    customPaging: (i) => (
      <div className="custom-dot">
       
      </div>
    ),
    speed: 1000,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
        <Navbar/>
        <div className='pb-6 flex gap-4 px-10 pt-3 '>
       
       {/*Wave*/}
        <div className='w-[78%] relative z-0  rounded-e-[35px] h-[96vh] overflow-hidden '>
        <Iridescence
  color={[0.4, 0.8, 0.9]}
  mouseReact={false}
  amplitude={0.1}
  speed={0.5}
/>

<div className='text-5xl w-[52%] text-white pl-0 pr-10 h-[38vh] rounded-se-[30px]  bg-black p-4 absolute z-20 bottom-0'>
      Equal parts creative developer & designer

      <img src={CornerSvg} alt="" className=' absolute -top-[30px] -rotate-90 left-0' />
      <img src={CornerSvg} alt="" className=' absolute -bottom-0 -rotate-90 -right-[30px]' />

      </div>

        </div>


{/* Right side component */}
<div className='flex flex-col items-center justify-between w-[21%]'>

   <CircleCrousel/>


<div className='flex flex-col custom-carousel items-center w-full justify-center relative bg-[#5d55fa]  p-4 rounded-3xl text-white '>

<Slider {...sliderSettings} className=' w-full h-[50vh]'>


<div className='!flex flex-col  gap-4'>
<img src={ChallangeX} alt="" className='bg-black rounded-2xl p-1 ' />
<p className='text-2xl p-1'>Stop Talking,Start Wining</p>
</div>
<div className='!flex flex-col  gap-4'>
<img src={ChallangeX} alt="" className='bg-black rounded-2xl p-1 ' />
<p className='text-2xl p-1'>Stop Talking,Start Wining</p>
</div>
<div className='!flex flex-col  gap-4'>
<img src={ChallangeX} alt="" className='bg-black rounded-2xl p-1 ' />
<p className='text-2xl p-1'>Stop Talking,Start Wining</p>
</div>
<div className='!flex flex-col  gap-4'>
<img src={ChallangeX} alt="" className='bg-black rounded-2xl p-1 ' />
<p className='text-2xl p-1'>Stop Talking,Start Wining</p>
</div>


</Slider>

<div className='absolute  -bottom-2 bg-black p-2 rounded-ss-[34px] right-0 '>
<div className='flex items-center border-2 border-white relative justify-center p-3 bg-black rounded-full'>
<ArrowUpRight/>
<img src={CornerSvg} alt="" className=' absolute -bottom-[2px] rotate-180 -left-10' />
<img src={CornerSvg} alt="" className=' absolute -top-10 rotate-180 -right-[10px]' />

</div>
</div>
</div>

</div>


        </div>
    </>
  )
}

export default HeroSection
