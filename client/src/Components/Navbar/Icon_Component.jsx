import React from 'react'
import cortexLogo from '../../assets/cortexLogo.svg'
import CornerSvg from '../../assets/CornerSvg.svg'
function Icon_Component() {
  return (
    <>
        <div className='pr-4 h-20 flex md:mt-[10px] translate-x-[-1px] items-center z-[999999]  relative bg-black w-full md:w-fit rounded-ee-3xl md:mr-3 '>
            <a href='/' className='flex items-center'>
            <img src={cortexLogo} alt="" className='w-16' />
           <div>
           <p className='text-white text-lg'>Cortex</p>
           <p className='text-white text-lg'>CSE</p>
           </div> 
            </a>
            <img src={CornerSvg} alt="" className='absolute top-3 md:top-[1px] lg:top-0 -right-[30px] lg:-right-[29px]' />
            <img src={CornerSvg} alt="" className='absolute left-0 -bottom-[30px] lg:-bottom-[29px]' />
       
     
        </div>
    </>
  )
}

export default Icon_Component
