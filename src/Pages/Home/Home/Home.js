import React from 'react';
import Header from '../../Shered/Header/Header';
import About from '../About/About';
import OurExpertise from '../OurExpertise/OurExpertise';
import OurTeam from '../OurTeam/OurTeam';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div style={{ background: '#212426' }}>
            <TopBanner />
            <About />
            <OurExpertise />
            <OurTeam />
        </div>
    );
};

export default Home;