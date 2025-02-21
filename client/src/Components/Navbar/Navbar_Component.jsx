import {useState} from 'react'
import {SunMedium, MoonIcon } from 'lucide-react'
function Navbar_Component() {

  const [Theme, setTheme] = useState('light')

  return (
   <>
   
        <div className=' hidden md:flex items-center gap-4 mt-2 w-fit px-4 h-[58px] backdrop-blur-xl rounded-[50px] bg-[#ffffff41] border-[1px] border-[#d1d5db80] shadow-2xl shadow-[#00000026] '>
            <a href='/events'>Events</a>
            <a href=''>About Us</a>
            <a href=''>Our Team</a>
            <a href='#Devs'>Developers</a>
            <button onClick={()=>setTheme(Theme === 'light' ? 'dark' : 'light')} className='aspect-square transition duration-500   rounded-full p-2 ml-3 flex items-center justify-center border border-black '>
            {Theme === 'light' ?  <SunMedium size={24} fill='black' />
              : <MoonIcon size={24} fill='black' />}
            </button>
        </div>

       
   
   </>
  )
}

export default Navbar_Component
