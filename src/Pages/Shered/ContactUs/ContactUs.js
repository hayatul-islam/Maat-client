import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contactUs'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col xs={12} md={6}>
                        <div className="big-font">
                            <h1 className='constUsTitle'>LET'S WORK </h1>
                            <h1 className='constUsTitle'>TOGETHER</h1>
                            <p>AND MAKE SOMETHING BIG</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="d-flex justify-content-center">
                            <div className="contactUsBtn">
                                <Link className='' to='/contact'>Contact Us</Link>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default ContactUs;