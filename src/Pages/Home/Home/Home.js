import React from 'react';
import BlogSlider from '../../Blogs/BlogSlider/BlogSlider';
import About from '../About/About';
import OurExpertise from '../OurExpertise/OurExpertise';
import OurTeam from '../OurTeam/OurTeam';
import Testimonial from '../Testimonial/Testimonial';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <About />
            <OurExpertise />
            <OurTeam />
            <Testimonial />
            <BlogSlider />
        </div>
    );
};

export default Home;