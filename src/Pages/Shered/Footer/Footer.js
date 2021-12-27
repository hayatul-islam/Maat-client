import React, { useEffect, useState } from 'react';
import { Col, Container, Image, NavDropdown, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    const [offices, setOffices] = useState([]);
    useEffect(() => {
        fetch('offices.json')
            .then(res => res.json())
            .then(data => setOffices(data))
    }, []);

    return (
        <div className='py-5'>
            <Container>
                <hr className='bg-white' />
                <div className='py-3'>
                    <Image className='footer-logo mb-3' src='https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cd04d07c241b_logo-white.png' />
                    <p>Multi-skilled law firm, operating worldwide</p>
                </div>

                <hr className='bg-white' />

                <div className='py-3'>
                    <div>
                        <div className="big-font pb-3">
                            <h2>CITIES & OFFICES</h2>
                        </div>
                    </div>
                    <Row>
                        {
                            offices.map(office => <Col
                                xs={12} md={3}
                                key={office?._id}>
                                <div className='contactOffice'>
                                    <h5>{office?.name}</h5>
                                    <p>{office?.location}</p>
                                    <p className='phone'>{office?.phone}</p>
                                </div>
                            </Col>)
                        }
                    </Row>
                </div>

                <hr className='bg-white' />

                <div className='pt-3'>
                    <div className='big-font pb-3'>
                        <h3>SITEMAP</h3>
                    </div>
                    <Row className='d-flex align-items-center'>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="/">Home</Link>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="/expertises">Expertise</Link>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <NavDropdown title="Maat" >
                                    <div className='dropdownItem'>
                                        <Link to="/expertises">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <span>01</span>
                                                    <p>Our story</p>
                                                </div>
                                                <div>
                                                    <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='dropdownItem'>
                                        <Link to="/teams">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <span>02</span>
                                                    <p>Team</p>
                                                </div>
                                                <div>
                                                    <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='dropdownItem'>
                                        <Link to="/expertises">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <span>03</span>
                                                    <p>Careers</p>
                                                </div>
                                                <div>
                                                    <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </NavDropdown>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="/blogs">Blog</Link>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="#">Changelog</Link>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="#">Licensing</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr className='bg-white' />
                <div className='pt-3'>
                    <div className='big-font pb-3'>
                        <h3>SOCIAL</h3>
                    </div>
                    <Row>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="https://web.facebook.com">Facebook</Link>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="#">Linkedin</Link>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="#">Instagram</Link>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='footer-menu'>
                                <Link to="#">Twitter</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr className='bg-white' />
                <div className='contactInfo'>
                    <p>Powered by Pedesys</p>
                </div>

            </Container>
        </div>
    );
};

export default Footer;