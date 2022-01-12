import React from 'react';
import BlogSlider from '../../Blogs/BlogSlider/BlogSlider';
import Footer from '../../Shered/Footer/Footer';
import About from '../About/About';
import ContactUs from '../../Shered/ContactUs/ContactUs';
import OurExpertise from '../OurExpertise/OurExpertise';
import OurTeam from '../OurTeam/OurTeam';
import Testimonial from '../Testimonial/Testimonial';
import ClarexBanner from '../ClarexBanner/ClarexBanner';
import './Home.css';
import { Container } from 'react-bootstrap';

const Home = () => {


    return (
        <div id='home' className='homeContainer'>
            <ClarexBanner />
            <About />
            <OurExpertise />
            <div className='bottomTopTopShow'>
                <OurTeam />
                <Testimonial />
                <BlogSlider />
                <ContactUs />
                <Footer />
                <div className='bottomToTop'>
                    <Container>
                        <div className="toTopContainer">
                            <a className='toTopBtn' href="#home">
                                <i className="fas fa-chevron-up"></i>
                            </a>
                        </div>
                    </Container>
                </div>
            </div>

        </div>
    );
};

export default Home;