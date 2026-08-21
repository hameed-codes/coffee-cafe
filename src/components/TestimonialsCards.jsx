import React from 'react'

const TestimonialsCards = ({ img, name, text }) => {
    return (
        <div className='m-6 flex flex-col py-10 px-6 rounded-2xl bg-red-100 shadow-xl hover:scale-105 transition-all duration-300'>
            {/* image section  */}
            <div>
                <img src={img} alt="" className='size-20 rounded-full mb-6' />
            </div>
            <p className='text-sm text-gray-500' >{text}</p>
            <h2 className='font-logo text-xl mt-4' >{name}</h2>

        </div>
    )
}

export default TestimonialsCards
