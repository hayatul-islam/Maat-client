import React from 'react';
import BlogSlider from '../../Blogs/BlogSlider/BlogSlider';
import About from '../About/About';
import OurExpertise from '../OurExpertise/OurExpertise';
import OurTeam from '../OurTeam/OurTeam';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <About />
            <OurExpertise />
            <OurTeam />
            <BlogSlider />
        </div>
    );
};

export default Home;