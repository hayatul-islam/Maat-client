import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import './Testimonial.css';
import { RatingView } from 'react-simple-star-rating';
import { Container } from 'react-bootstrap';

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    const settings = {
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 0.5,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='mainSection'>
            <Container>
                <div className="big-font">
                    <h1 className='ourTeamTitle'>OUR CLIENTS ARE </h1>
                    <h1 className='ourTeamTitle'>OUR BEST AMBASSADORS</h1>
                </div>
            </Container>
            <Slider {...settings}>
                {
                    testimonials.map(testimonial => <div key={testimonial?._id}>
                        <div className='testimonials'>
                            <div className='pb-3'>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>{testimonial?.description}</p>
                            <h6>{testimonial?.name} - <span className='text-normal'>{testimonial?.expertise}</span></h6>
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Testimonial;