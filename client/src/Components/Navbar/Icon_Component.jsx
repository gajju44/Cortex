import React from 'react'
import cortexLogo from '../../assets/cortexLogo.svg'
import CornerSvg from '../../assets/CornerSvg.svg'
function Icon_Component() {
  return (
    <>
        <div className='pr-4 h-20 flex mt-[10px] items-center relative bg-black rounded-ee-3xl mr-3 '>
            <div className='flex items-center'>
            <img src={cortexLogo} alt="" className='w-16' />
           <div>
           <p className='text-white text-lg'>Cortex</p>
           <p className='text-white text-lg'>CSE</p>
           </div> 
            </div>
            <img src={CornerSvg} alt="" className='absolute top-0 -right-[30px]' />
            <img src={CornerSvg} alt="" className='absolute left-0 -bottom-[30px]' />
        </div>
    </>
  )
}

export default Icon_Component
