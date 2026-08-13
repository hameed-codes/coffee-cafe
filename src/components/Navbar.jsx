import React, { useState } from 'react'
import assets from '../assets/assets'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  return (
    <div className='flex items-center px-4 sm:px-12 lg:px-24 xl:px-40 text-white bg-secondary justify-between'>
      {/* logo  */}
      <img src={assets.logo} className='w-50' alt="" />

      {/* menu-icon  */}
      <img src={assets.menu_icon} alt="" className='sm:hidden top-3 right-3 absolute w-8' onClick={()=>{setMenuOpen(true)}} />

      {/* links  */}
      <div className={`flex max-sm:flex-col items-center gap-7 font-semibold text-lg xl:gap-10 max-sm:bg-primary max-sm:min-h-screen top-0 right-0 bottom-0 max-sm:fixed  ${!menuOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:py-30 max-sm:w-60'}`}>


        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <button className='rounded-full flex items-center font-bold bg-primary/60 hover:scale-105 hover:cursor-pointer px-4 py-2 transition-all duration-400 max-sm:hidden' >Order Now</button>

      </div>
    </div>
  )
}

export default Navbar
