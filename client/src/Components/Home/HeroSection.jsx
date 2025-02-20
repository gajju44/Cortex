import {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Iridescence from './Iridescence'
import CircleCrousel from './CircleCrousel';
import ChallangeX from '../../assets/Events/ChallangeX.svg'
import { ArrowUpRight } from 'lucide-react';
import CornerSvg from '../../assets/CornerSvg.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Events } from '../EventPage/EventsData';

function HeroSection() {

  const [currentSlide, setCurrentSlide] = useState(0);

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
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Update the current slide index
    },
  };

  return (
    <>
        <Navbar/>
        <div className='pb-6 flex flex-col lg:flex-row items-center  lg:items-stretch gap-4 px-5 md:px-10 pt-3 '>
       
       {/*Wave*/}
        <div className='w-full lg:w-[78%] relative z-0  rounded-e-[35px] h-[96vh] overflow-hidden '>
        <Iridescence
  color={[0.4, 0.8, 0.9]}
  mouseReact={false}
  amplitude={0.1}
  speed={0.5}
/>

<div className=' text-[8vw] lg:translate-x-[-1px] font-bold sm:font-normal sm:text-5xl w-[68%] sm:w-[72%] md:w-[84%] lg:w-[80%] xl:w-[51%] text-white pl-0 pr-10 h-[4] md:h-[38vh] rounded-se-[30px]  bg-black p-4 absolute z-20 -bottom-[1px] -left-[1px] '>
      Equal parts creative developer & designer

      <img src={CornerSvg} alt="" className=' absolute -top-[30px] lg:-top-[29px] -rotate-90 left-[1px] xl:left-[2px]' />
      <img src={CornerSvg} alt="" className=' absolute -bottom-0  -rotate-90 -right-[30px] lg:-right-[29.3px]' />

      </div>

        </div>


{/* Right side component */}
<div className='flex flex-col items-center justify-between gap-4 w-full lg:w-[28%] xl:w-[21%]'>

   <CircleCrousel/>


<div className='flex flex-col custom-carousel items-center w-full justify-center relative bg-[#5d55fa]  p-4 rounded-3xl text-white '>

{Events.length > 1 ? 
  <Slider {...sliderSettings} className=' w-full pb-10 lg:pb-0 lg:h-[50vh]'>
{Events.map((event,index)=>(


<div  key={index} className='!flex flex-col  gap-4'>
<img src={ChallangeX} alt="" className='bg-black rounded-2xl p-1 ' />
<p className='text-2xl p-1'>{event.Tagline}</p>
</div>

))}
</Slider>
:

<div className=' w-full pb-10 lg:pb-0 lg:h-[50vh]'>

<div className='!flex flex-col  gap-4'>
<img src={Events[0].Image} alt="" className='bg-black rounded-2xl p-1 ' />
<p className='text-2xl p-1'>{Events[0].Tagline}</p>
</div>

</div>}


<div className='absolute lg:translate-x-[1px]  -bottom-2 bg-black p-2 rounded-ss-[34px] right-0 '>
<a  href={`/events-details?Data=${encodeURIComponent(JSON.stringify(Events[currentSlide]))}`} className='flex items-center border-2 border-white relative justify-center p-3 bg-black rounded-full'>
<ArrowUpRight/>
<img src={CornerSvg} alt="" className=' absolute -bottom-[3px] rotate-180 -left-[39px]' />
<img src={CornerSvg} alt="" className=' absolute -top-[39px] rotate-180 -right-[10px]' />

</a>
</div>

</div>

</div>


        </div>
    </>
  )
}

export default HeroSection
