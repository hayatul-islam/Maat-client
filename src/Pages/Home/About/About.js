import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {

    return (
        <div id='about' className='mainSection'>
            <Container>
                <div>
                    <div className='big-font about-title'>
                        <h1 className="who">WHO</h1>
                        <h1 className="weAre">WE ARE</h1>
                    </div>
                    <div>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="text-color about-text mt-4">
                                    <p>A world of sustenance that opens the doorway to create impact. Being faced with problems that exceed one's capabilities is often intimidating. This leads to decisions that can deliver blows to the tide of change. But with us beside you, focus on the crucial matters and leave the change to us. </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="text-color about-text mt-5 pt-5">
                                    <p>While you focus on the business process, we take care of your foundation. In this competitive and volatile market, precision and data readiness matter the most. Lack of this often leaves scars on the market cap of a business. That's why we become your disrupters to provide intelligent, data-driven solutions and strategies.</p>
                                </div>
                            </Col>

                            <div className="aboutHr mb-5">
                                <hr data-aos="fade-right" data-aos-duration="1000" className='bg-white' />
                            </div>

                            {/* key figures */}
                            <div className='keyFigure big-font'>
                                <h1>KEY</h1>
                                <h1>FIGURES</h1>
                            </div>
                            <Col xs={12} md={6}>
                                <div>
                                    <Row>
                                        <Col xs={6}>
                                            <div className='pb-5 big-font'>
                                                <h2>2B+</h2>
                                                <p>Turnover</p>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className='pb-5 big-font'>
                                                <h2>150</h2>
                                                <p>Employees</p>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className='pb-5 big-font'>
                                                <h2>44</h2>
                                                <p>Forum Participants</p>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className='pb-5 big-font'>
                                                <h2>72</h2>
                                                <p>Conference Participants</p>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className='pb-5 big-font'>
                                                <h2>+200</h2>
                                                <p>Of renewables production</p>
                                            </div>
                                        </Col>

                                    </Row>
                                </div>

                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <div className='key-figures big-font'>
                                        <h1>KEY</h1>
                                        <h1>FIGURES</h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="">
                            <hr data-aos="fade-right" data-aos-duration="1000" className='bg-white' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;