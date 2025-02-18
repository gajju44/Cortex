import React from 'react'
import Icon_Component from './Icon_Component'
import Navbar_Component from './Navbar_Component'

function Navbar() {
  return (
    <div className='flex  h-20  px-10  items-center fixed inset-0 top-3 left-0 '>
      
      <Icon_Component/>
      <Navbar_Component/>

    </div>
  )
}

export default Navbar
