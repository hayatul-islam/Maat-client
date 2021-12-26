import React from 'react';
import BlogSlider from '../../Blogs/BlogSlider/BlogSlider';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
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
            <ContactUs />
        </div>
    );
};

export default Home;