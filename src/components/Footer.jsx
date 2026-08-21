import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import assets from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg_image3'>

            <div className='px-4 sm:px-10 lg:px-20 xl:px-30 2xl:px-40 py-15 flex max-sm:flex-col sm:gap-9'>

                {/* footer left section  */}
                <div className='flex flex-col justify-center mb-20 font-logo gap-7'>
                    <h2 className='text-4xl text-white font-logo'>Coffee Cafe</h2>
                    <p className='text-xl text-white md:w-5/6'>Crafted Coffee, Cozy Vibes, Unforgettable Moments; Your Perfect Espresso Escape</p>

                    <button className='text-white w-60 bg-secondary rounded-full p-3 hover:scale-110 transition-all duration-300 cursor-pointer '  ><a href="">Visit Our YouTube Channel</a></button>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-9'>
                    <div className='text-gray-300 flex flex-col gap-6'>
                        <h3 className='text-xl text-white'>Footer Links</h3>
                        <a href="#" className='hover:scale-105 transition-all duration-200 hover:text-white'>Home</a>

                        <a href="#about" className='hover:scale-105 transition-all duration-200 hover:text-white'>About</a>

                        <a href="#" className='hover:scale-105 transition-all duration-200 hover:text-white'>Contact</a>

                        <a href="#" className='hover:scale-105 transition-all duration-200 hover:text-white'>Blog</a>
                        
                    </div>

                    <div className='text-gray-300 flex flex-col gap-6'>
                        <h3 className='text-xl text-white'>Quick Links</h3>
                        <a href="#" className='hover:scale-105 transition-all duration-200 hover:text-white'>Home</a>

                        <a href="#about" className='hover:scale-105 transition-all duration-200 hover:text-white'>About</a>

                        <a href="#" className='hover:scale-105 transition-all duration-200 hover:text-white'>Contact</a>

                        <a href="#" className='hover:scale-105 hover:text-white transition-all duration-200'>Blog</a>
                        
                    </div>

                    <div className='text-white flex flex-col gap-6'>
                        <h3 className='text-xl'>Address</h3>
                        <p>Islamabad, Pakistan</p>
                        <p>+92 333 3333333</p>

                        <div className='flex aitems-center gap-4'>
                            <img src={assets.facebook} alt="" className='hover:scale-110 transition-all duration-200' />
                            <img src={assets.instagram} alt="" className='hover:scale-110 transition-all duration-200' />
                            <img src={assets.linkedin} alt="" className='hover:scale-110 transition-all duration-200' />
                        </div>

                        
                    </div>

                    <div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
