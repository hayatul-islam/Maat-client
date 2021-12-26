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
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1.4,
        slidesToScroll: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
    };

    return (
        <div>
            <Container>
                <div className="big-font pt-5">
                    <h1>OUR CLIENTS ARE </h1>
                    <h1>OUR BEST AMBASSADORS</h1>
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