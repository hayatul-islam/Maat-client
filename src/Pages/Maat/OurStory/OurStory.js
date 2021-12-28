import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ContactUs from '../../Shered/ContactUs/ContactUs';
import Footer from '../../Shered/Footer/Footer';
import './OurStory.css';

const OurStory = () => {

    const [story, setStory] = useState([]);
    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/story')
            .then(res => res.json())
            .then(data => setStory(data))
    }, [])

    return (
        <div className="pb-5">
            <Container>
                <div className='banner-container py-3'>
                    <div className='big-font'>
                        <h1>IT ALL STARTED</h1>
                        <div className='storyInfo'>
                            <div>
                                <h1>WITH</h1>
                            </div>
                            <div className='rightInfo'>
                                <h1>AN IDEA</h1>
                                <p>DISCOVER THE STORY OF MATT & SHIRLEY, <br />
                                    CO-FOUNDERS OF MAAT</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <a className='downBtn' href="#ourStory"><i className="fas fa-arrow-down"></i></a>
                    </div>
                    <div data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                        className='bannerImg storyImg'>
                        <img src="https://i.ibb.co/fX1z144/story.jpg" alt="" />
                    </div>
                </div>
                <div id='ourStory' className='mainSection'>
                    {
                        story.map(story => <div key={story?._id}>
                            <div className='py-5'>
                                <Row>
                                    <Col xs={12} lg={6}>
                                        <div className="big-font">
                                            <h1 className='storyYear'>{story?.year}</h1>
                                            <h1>{story?.title}</h1>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6}>
                                        <div>
                                            <div className="big-font">
                                                <h2>{story?.sub_title}</h2>
                                                <p>{story?.description}</p>
                                                <Image className='w-100' src={story?.image} />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='mt-5 pt-5'>
                                <hr className='bg-white' />
                            </div>
                        </div>)
                    }

                </div>
            </Container>
            <div className='navStoryContainer'>
                <Container>
                    <Row className='navStory'>

                        {
                            story.map(story => <div

                                key={story?._id}>
                                <div className='big-font navStoryItem'>
                                    <h5>{story?.year}</h5>
                                    <p>{story?.title}</p>
                                </div>
                            </div>)
                        }
                    </Row>

                </Container>
            </div>

            <ContactUs />
            <Footer />
        </div>
    );
};

export default OurStory;