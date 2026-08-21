import React from 'react'

const ServiceCard = ({image, title, description}) => {
  return (
    <div className='text-gray-900 rounded-xl shadow-2xl bg-white hover:bg-tertiary hover:text-white group p-5 flex flex-col items-center justify-center text-center cursor-pointer'>
        <img src={image} alt="" className='-translate-y-16 -mb-12  group-hover:scale-110 group-hover:rotate-6 w-50 transition-all duration-300' />
      <h3 className='text-lg m-2'>{title}</h3>
      <p className='text-sm text-gray-600 group-hover:text-white line-clamp-2'>{description}</p>
    </div>
  )
}

export default ServiceCard
