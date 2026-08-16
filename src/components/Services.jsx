import React from 'react'
import assets from '../assets/assets';
import ServiceCard from './ServiceCard';

const Services = () => {

    const servicesData = [
        {
            image: assets.coffee,
            name: 'Espresso',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.'
        },

        {
            image: assets.coffee,
            name: 'Americano',
            description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet'
        },

        {
            image: assets.coffee,
            name: 'Cappuccino',
            description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet'
        },
    ];

  return (
    <div id='services' className='flex flex-col items-center items-center px-4 sm:px-10 lg:20 xl:px-36 2xl:px-50 gap-10 py-15'>

        {/* title section */}
        <div className='flex items-center justify-center mb-20 font-logo'>
            <h2 className='text-4xl text-gray-800 font-logo'>Best Coffee For You</h2>
        </div>

        {/* card section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-20 gap-10 max-sm:px-7 max-sm:gap-20 max-md:gap-20'>
            {servicesData.map((service, index)=>{
                return <ServiceCard key={index} image={service.image} title={service.name} description={service.description}/>
            })}
        </div>

      
    </div>
  )
}

export default Services
