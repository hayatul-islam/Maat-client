import React from 'react';
import { Container } from 'react-bootstrap';
import './TopBanner.css';
// import AOS from 'aos'
// import 'aos/dist/aos.css';

const TopBanner = () => {
    return (
        <div className='banner-container py-3'>
            <Container>
                <div className='big-font'>
                    <h1>MULTI-SKILLED</h1>
                    <h1 className='text-end py-4'>LAW FIRM</h1>
                    <h1>OPERATING</h1>
                    <h1>WORLDWIDE</h1>
                    <h5 className='text-end sinceYear'>SINCE 1997</h5>
                </div>
                <div className="mt-4">
                    <a className='downBtn' href="#about"><i className="fas fa-arrow-down"></i></a>
                </div>
            </Container>
            <div className='bannerImg topBannerImg'>
                <img src="https://i.ibb.co/bdL6qPm/top-banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default TopBanner;