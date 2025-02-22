import {useState} from 'react'
import Icon_Component from './Icon_Component'
import Navbar_Component from './Navbar_Component'
import CornerSvg from '../../assets/CornerSvg.svg'

function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='flex  h-20 z-50 md:border-t-[12px] border-black bg-black md:bg-transparent border-x-[20px]  md:border-x-[40px] w-full items-center justify-between md:justify-start fixed inset-0 top-0 left-0 '>
      
      <Icon_Component/>
      <Navbar_Component/>

      <img src={CornerSvg} alt="" className='md:hidden absolute right-0 rotate-90 -bottom-[30px]' />

        <div className='md:hidden px-2 '>

          <div className={`${showMenu ? 'flex' : 'hidden'} items-center gap-4 px-5 w-full rounded-3xl  h-[80vh] fixed top-3 right-0 `}>
          <img src={CornerSvg} alt="" className='md:hidden absolute right-0 rotate-90 -top-0' />

              <div className='bg-[#5d55fa] rounded-3xl text-white font-bold text-3xl flex flex-col items-start px-10  justify-center gap-4 p-2 w-full h-full'>
                    <a className='hover:underline' href="/events">Events</a>
                    <a className='hover:underline' href="">About Us</a>
                    <a className='hover:underline' href="">Our Team</a>
                    <a className='hover:underline' href="#Devs">Developers</a>
              </div>
          </div>

          <button onClick={() => setShowMenu(!showMenu)} className='p-2 w-20  z-50 relative rounded-3xl border border-white text-white'>
            Menu
          </button>
        </div>

    </div>
  )
}

export default Navbar
