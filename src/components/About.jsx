import React from 'react'
import assets from '../assets/assets'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'


const About = () => {
    return (
        <div id='about' className='bg_image1 border-t-2 border-tertiary md:border-none'>
            <div className='px-4 sm:px-10 lg:px-20 xl:px-36 2xl:px-50 py-15 flex items-center justify-center'>

                {/* grid-div  */}

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

                    {/* coffee image section  */}

                    <div className='flex items-center justify-center'>
                        <img src={assets.coffee_white} alt="" className='spin' />
                    </div>

                    {/* text section  */}

                    <div className='flex flex-col gap-7 justify-center'>
                        <h2 className='text-4xl font-logo'>Premium Blen Coffee</h2>
                        <p className='text-gray-500 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>

                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex items-center gap-5'>
                                    <GrSecure className='text-2xl shadow-sm rounded-full size-12 p-3 bg-red-100' />
                                    <p>Premium Coffee</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <IoFastFood className='text-2xl shadow-sm rounded-full size-12 p-3 bg-orange-100' />
                                    <p>Hot Coffee</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <GiFoodTruck className='text-2xl shadow-sm rounded-full size-12 p-3 bg-yellow-100' />
                                    <p>Cold Coffee</p>
                                </div>
                            </div>

                            <div className='pl-3 border-l-4 border-tertiary'>
                                <h3 className='text-2xl font-logo mb-3'>Tea Lover</h3>
                                <p className='text-gray-500 text-sm font-semibold'>Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default About
