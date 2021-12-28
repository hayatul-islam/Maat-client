import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {

    const [figures, setFigures] = useState([]);
    useEffect(() => {
        fetch('figures.json')
            .then(res => res.json())
            .then(data => setFigures(data))
    }, [])

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
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="text-color about-text mt-5 pt-5">
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                </div>
                            </Col>

                            <div className="aboutHr mb-5">
                                <hr className='bg-white' />
                            </div>

                            {/* key figures */}
                            <div className='keyFigure big-font'>
                                <h1>KEY</h1>
                                <h1>FIGURES</h1>
                            </div>
                            <Col xs={12} md={6}>
                                <Row>


                                    {
                                        figures.map(figure => <Col key={figure?._id} xs={6}>
                                            <div className='pb-5'>
                                                <h2>{figure?.title}</h2>
                                                <p>{figure?.description}</p>
                                            </div>
                                        </Col>)
                                    }

                                </Row>

                            </Col>
                            <Col xs={12} md={6}>
                                <div className='key-figures big-font'>
                                    <h1>KEY</h1>
                                    <h1>FIGURES</h1>
                                </div>
                            </Col>
                        </Row>
                        <div className="">
                            <hr className='bg-white' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;