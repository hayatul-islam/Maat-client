import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div style={{ background: '#212426' }}>
            <Navbar className='pt-4 pb-2' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className='header-logo' src='https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cd04d07c241b_logo-white.png' />
                    </Navbar.Brand>
                    <Nav className="ms-auto header-menu">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/expertises">Expertise</NavLink>
                        <NavDropdown title="Maat" >
                            <div className='dropdownItem'>
                                <NavLink to="/expertises">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <span>01</span>
                                            <p>Our story</p>
                                        </div>
                                        <div>
                                            <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='dropdownItem'>
                                <NavLink to="/teams">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <span>02</span>
                                            <p>Team</p>
                                        </div>
                                        <div>
                                            <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='dropdownItem'>
                                <NavLink to="/expertises">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <span>03</span>
                                            <p>Careers</p>
                                        </div>
                                        <div>
                                            <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </NavDropdown>
                        <NavLink to="/blogs">Blog</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <hr className='bg-white' />
        </div>
    );
};

export default Header;