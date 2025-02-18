import React from 'react'
import Navbar from '../Navbar/Navbar'
import Iridescence from './Iridescence'
function HeroSection() {
  return (
    <>
        <Navbar/>
        <div className='pb-6 flex gap-4 px-10 pt-3 '>
       
       {/*Wave*/}
        <div className='w-[78%]  rounded-[35px] h-[96vh] overflow-hidden '>
        <Iridescence
  color={[0.4, 0.9, 1]}
  mouseReact={false}
  amplitude={9}
  speed={0.5}
/>
        </div>

<div className='flex flex-col w-[21%]'>

    <div className='rounded-full border-2 border-white w-full aspect-square'>
   
    </div>

</div>

        </div>
    </>
  )
}

export default HeroSection
