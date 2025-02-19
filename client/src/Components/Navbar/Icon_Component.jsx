import React from 'react'
import Logo from '../../assets/Logo.svg'
import CornerSvg from '../../assets/CornerSvg.svg'
function Icon_Component() {
  return (
    <>
        <div className='pr-4 h-20 flex mt-[10px] items-center relative bg-black rounded-ee-3xl mr-3 '>
            <img src={Logo} alt="" className='w-24' />
            <img src={CornerSvg} alt="" className='absolute top-0 -right-[30px]' />
            <img src={CornerSvg} alt="" className='absolute left-0 -bottom-[30px]' />
        </div>
    </>
  )
}

export default Icon_Component
