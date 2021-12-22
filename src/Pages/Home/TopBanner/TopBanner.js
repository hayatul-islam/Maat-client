import React from 'react';
import { Container } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className='banner-container py-5'>
            <Container>
                <div className='big-font'>
                    <h1>MULTI-SKILLED</h1>
                    <h1 className='text-end'>LAW FIRM</h1>
                    <h1>OPERATING</h1>
                    <h1>WORLDWIDE</h1>
                    <h5 className='text-end text-light fw-light'>SINCE 1997</h5>
                </div>
                <hr className='bg-white mt-5' />
            </Container>
        </div>
    );
};

export default TopBanner;