import React from 'react'
import assets from '../assets/assets'

const MobileStores = () => {
  return (
    <div className='bg_image2'>

        <div className='px-4 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 py-15 gap-7 flex flex-col max-md:text-center'>

            <h1 className='text-white text-4xl w-3/5 font-bold max-md:w-full lg:text-5xl'>Coffee Cafe is available for Android and IOS</h1>

            <div className='flex items-center gap-7 max-sm:flex-col'>
                <img src={assets.app_store} alt="" className='w-70 max-md:w-60'/>
                <img src={assets.play_store} alt="" className='w-70 max-md:w-60' />
            </div>

        </div>
      
    </div>
  )
}

export default MobileStores
