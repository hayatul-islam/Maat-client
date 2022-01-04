import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {

    const [figures, setFigures] = useState([]);
    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/figures')
            .then(res => res.json())
            .then(data => setFigures(data))
    }, [])

    return (
        <div id='about' className='mainSection'>
            <Container>
                <div data-aos="fade-up" data-aos-duration="1000">
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
                            <div data-aos="fade-up" data-aos-duration="1000" className='keyFigure big-font'>
                                <h1>KEY</h1>
                                <h1>FIGURES</h1>
                            </div>
                            <Col xs={12} md={6}>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <Row>
                                        {
                                            figures.map(figure => <Col key={figure?._id} xs={6}>
                                                <div className='pb-5 big-font'>
                                                    <h2>{figure?.title}</h2>
                                                    <p>{figure?.description}</p>
                                                </div>
                                            </Col>)
                                        }

                                    </Row>
                                </div>

                            </Col>
                            <Col xs={12} md={6}>
                                <div data-aos="fade-up" data-aos-duration="1000">
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