import React from 'react'
import TestimonialsCards from './TestimonialsCards'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlider = Slider.default || Slider;

const Testimonials = () => {

    const testimonialsData = [
        {
            name: "Dilshad",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/101/101",
        },
        {
            name: "Sabir ali",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/102/102",
        },
        {
            name: "Dipankar kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/104/104"
        },
        {
            name: "Satya Narayan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/103/103"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 3000, 
        pauseOnHover: true,  

        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className='flex flex-col px-4 sm:px-10 lg:px-20 xl:px-36 2xl:px-50 py-15 gap-8'>
            {/* title */}
            <div className='flex items-center justify-center mb-8 font-logo'>
                <h2 className='text-4xl text-gray-800 font-logo'>Testimonials</h2>
            </div>

            {/* cards section */}
            <div>
                <ReactSlider {...settings}>
                    {testimonialsData.map((review, index) => (
                        <TestimonialsCards key={index} img={review.img} name={review.name} text={review.text} />
                    ))}
                </ReactSlider>
            </div>
        </div>
    )
}

export default Testimonials 