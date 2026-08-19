import React, { useState } from 'react'
import assets from '../assets/assets'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  return (
    <div className='flex items-center px-4 sm:px-10 lg:px-22 xl:px-36 text-white bg-secondary justify-between 2xl:px-50 z-20'>
      {/* logo  */}
      <img src={assets.logo} className='w-50' alt="" />

      {/* menu-icon  */}
      <img src={assets.menu_icon} alt="" className='sm:hidden top-4 right-3 absolute w-8' onClick={()=>{setMenuOpen(true)}} />

  
      <div className={`flex top-0 z-20 max-sm:flex-col items-center gap-7 font-semibold xl:gap-10 max-sm:bg-primary max-sm:min-h-screen top-0 right-0 bottom-0 max-sm:fixed  ${!menuOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:py-30 max-sm:w-60'} transition-all duration-200`}>

        {/* menu-close  */}
        <img src={assets.close_icon} className='sm:hidden top-4 right-4 absolute w-8' alt="" onClick={()=>{setMenuOpen(false)}}/>
        {/* LINKS  */}
        <a href="#home" className='sm:hover:border-b'>Home</a>
        <a href="#services" className='sm:hover:border-b' >Services</a>
        <a href="#about" className='sm:hover:border-b'>About</a>


        <button className='rounded-full flex items-center text-sm font-bold bg-tertiary hover:scale-105 hover:cursor-pointer px-4 py-2 transition-all duration-400 max-sm:hidden sm:m-1' >Order Now</button>

      </div>
    </div>
  )
}

export default Navbar
