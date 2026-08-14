import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 bg-primary text-white px-4 sm:px-12 lg:px-24 xl:px-40 pt-15 pb-15 gap-10'>
      {/* text content section  */}
      <div className='flex flex-col order-2 sm:order-1 justify-center'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl pb-8 max-sm:w-5/6 max-sm:px-3'>We serve the richest <span className='text-tertiary font-500'>Coffee</span> in the city.</h1>

        <button className='border w-40 py-2 rounded-full bg-gradient-to-r from-tertiary to-secondary hover:scale-105 transition-all duration-400'>Coffee & Code</button>
      </div>

      {/* image section */}
      <div className='flex flex-col items-center justify-center lg:px-12 mx-auto order-1 sm:order-2 relative max-sm:w-5/6'>


        <img src={assets.coffee} alt="" className='w-full spin' />

        <button className=' top-0 left-0 absolute border-tertiary py-2 px-4 rounded-full bg-gradient-to-r from-tertiary to-secondary hover:scale-105 transition-all duration-400'>Hey Coder!</button>
        
        <button className=' bottom-0 right-0 absolute border-tertiary py-2 px-4 rounded-full bg-gradient-to-r from-secondary to-tertiary hover:scale-105 transition-all duration-400'>Best Coffee</button>

      </div>
    </div>
  )
}

export default Hero
