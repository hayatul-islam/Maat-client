import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './OurStory.css';

const OurStory = () => {

    const [story, setStory] = useState([]);
    useEffect(() => {
        fetch('story.json')
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
                        <a className='downBtn' href="#about"><i className="fas fa-arrow-down"></i></a>
                    </div>
                    <div className='bannerImg storyImg'>
                        <img src="https://i.ibb.co/bdL6qPm/top-banner.jpg" alt="" />
                    </div>
                </div>
                <div className='py-5 mt-5'>
                    {
                        story.map(story => <div key={story?._id}>
                            <div className='py-5'>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <div className="big-font">
                                            <h1 className='storyYear'>{story?.year}</h1>
                                            <h1>{story?.title}</h1>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
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
        </div>
    );
};

export default OurStory;