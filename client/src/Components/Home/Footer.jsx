import React from 'react'
import cortexLogo from '../../assets/cortexLogo.svg'

import { Link } from 'react-router-dom';

function Footer() {
    const Navlinks =[
        {
            text:'Events',
            Link:'/events'
        },
        {
            text:'About Us',
            Link:'/'
        },
        {
            text:'Our Team',
            Link:'/'
        },
        {
            text:'Developers',
            Link:'#Devs'
    }]
    const currentYear = new Date().getFullYear();

  return (
    <>
        <footer className='bg-[#06080a] w-screen flex items-center justify-center pt-10 pb-5 '>
            <div className=' flex flex-col gap-5 justify-center items-center '>
                <img width='auto' height='auto' src={cortexLogo} alt="Gajendra Naphade Portfolio Logo - UI/UX Designer and Web Developer" loading="lazy" decoding="async" className='w-20' />

                <nav   aria-label="Footer Navigation Links" className='flex gap-5 xl:gap-10 items-center justify-center'>
            {Navlinks.map((data,index)=>(
   <Link key={index} to={data.Link} 
   aria-label={`Navigate to ${data.text} section`}
   className={
        `py-[30px]  underline-animation relative gap-1 text-white font-medium flex justify-center items-center`} style={{ fontSize: "clamp(12px, 1.3vw, 16px)" }} >
      {data.text} 
    </Link>               
               ) )}
        </nav >

               <p className='text-[#bdbdbd] text-center'> © {currentYear} Cortex | All Rights Reserved | Developed by Ankit,Jitesh,Gajendra </p>

            </div>

        </footer>
    </>
  )
}

export default Footer
