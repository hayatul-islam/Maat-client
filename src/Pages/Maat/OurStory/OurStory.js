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
    }, []);

    // window.onscroll = function () { myFunction() };
    window.onscroll = function () { myFunction() };
    function myFunction() {
        // var winScroll = document.getElementById('ourStory').scrollTop || document.documentElement.scrollTop;
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    return (
        <div className="pb-5">
            <Container>
                <div className='banner-container storyBanner py-3'>
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
                    <div className='bannerImg storyImg'>
                        <img src="https://i.ibb.co/fX1z144/story.jpg" alt="" />
                    </div>
                </div>
            </Container>
            <div className="ourStory">
                <div class="scrollHeader">
                    <div class="progress-container">
                        <div id="myBar" class="progress-bar"></div>
                    </div>
                </div>
                <Container>
                    <div id='ourStory' className='mainSection'>
                        {
                            story.map((story, index) => <div key={story?._id}>
                                <div id={story?._id} className='py-5'>
                                    <Row>
                                        <Col xs={12} lg={6}>
                                            <div className="big-font singleStory">
                                                <h3 className='storyAbout'>{story?.about}</h3>
                                                <h1>{story?.title}</h1>
                                            </div>
                                        </Col>
                                        <Col xs={12} lg={6}>
                                            <div>
                                                <div className="big-font singleStory">
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
                    <Container >
                        <Row className='navStory'>

                            {
                                story.map((story, index) => <div
                                    className='navStoryItem'
                                    key={story?._id}>
                                    <a href={`#${story?._id}`}>
                                        <div className='big-font'>
                                            <h5>{story?.about}</h5>
                                            <p>{story?.title}</p>
                                        </div>
                                    </a>
                                </div>)
                            }
                        </Row>
                    </Container>
                </div>
                <ContactUs />
                <Footer />
            </div>

        </div >
    );
};

export default OurStory;