import React from 'react';
import Header from '../../Shered/Header/Header';
import About from '../About/About';
import OurExpertise from '../OurExpertise/OurExpertise';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div style={{ background: '#212426' }}>
            <Header />
            <TopBanner />
            <About />
            <OurExpertise />
        </div>
    );
};

export default Home;