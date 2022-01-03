import React from 'react';
import BlogSlider from '../../Blogs/BlogSlider/BlogSlider';
import Footer from '../../Shered/Footer/Footer';
import About from '../About/About';
import ContactUs from '../../Shered/ContactUs/ContactUs';
import OurExpertise from '../OurExpertise/OurExpertise';
import OurTeam from '../OurTeam/OurTeam';
import Testimonial from '../Testimonial/Testimonial';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div className='homeContainer'>
            <TopBanner />
            <About />
            <OurExpertise />
            <OurTeam />
            <Testimonial />
            <BlogSlider />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;