import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ClarexBanner.css';

const ClarexBanner = () => {
    return (
        <div className='banner-container py-5'>
            <Container>
                <Row className=''>
                    <Col xs={12} lg={8}>
                        <div className='big-font clarexTitle'>
                            <h1 data-aos="fade-up"
                                data-aos-duration="1000">Your Growth</h1>
                            <h1 data-aos="fade-up"
                                data-aos-duration="1000">Our Priority </h1>
                            <h4 className='clarexDescription'>Commanding the goals of future!</h4>
                        </div>
                        {/* <div className="mt-5 pt-5">
                            <a className='downBtn' href="#about">
                                <i className="fas fa-arrow-down "></i>
                            </a>
                        </div> */}

                    </Col>
                    <Col xs={12} lg={4}>
                        <div data-aos="fade-right" data-aos-duration="1000" className='clarexImg'>
                            {/* <img src="https://i.ibb.co/tzbYQ10/success-concept-ladder-with-glowing-light-bulb-1017-32076-removebg-preview.png" alt="" /> */}
                            {/* <img src="https://i.ibb.co/b1qMpnq/success-concept-ladder-with-glowing-light-bulb-1017-32076-2-removebg-preview.png" alt="" /> */}
                            <img src="https://i.ibb.co/b1qMpnq/success-concept-ladder-with-glowing-light-bulb-1017-32076-2-removebg-preview.png" alt="" />
                        </div>
                    </Col>
                </Row>
                <div className=" pt-5">
                    <a className='downBtn downLinkBtn' href="#about">
                        <i className="fas fa-arrow-down "></i>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default ClarexBanner;