import React from 'react';
import { Container } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className='banner-container py-3'>
            <Container>
                <div className='big-font'>
                    <h1 data-aos="fade-up"
                        data-aos-duration="1000">MULTI-SKILLED</h1>
                    <h1 data-aos="fade-up"
                        data-aos-duration="1000" className='text-end py-4'>LAW FIRM</h1>
                    <h1 data-aos="fade-up"
                        data-aos-duration="1000">OPERATING</h1>
                    <h1 data-aos="fade-up"
                        data-aos-duration="1000">WORLDWIDE</h1>
                    <h5 data-aos="fade-up"
                        data-aos-duration="1000" className='text-end sinceYear'>SINCE 1997</h5>
                </div>
                <div className="mt-5 pt-5">
                    <a className='downBtn' href="#about">
                        <i className="fas fa-arrow-down "></i>
                    </a>
                </div>
                <div className='bannerImg topBannerImg'>
                    <img src="https://i.ibb.co/bdL6qPm/top-banner.jpg" alt="" />
                </div>
            </Container>
        </div>
    );
};

export default TopBanner;