import React from 'react';
import { Container, Dropdown, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/')
    }

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-150px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <>
            <div className='navbarMenu' style={{ background: '#212426' }}>
                <Navbar id='navbar' className='sticky-top' variant="dark" expand="md">
                    <Container>
                        <Navbar.Brand className='logoContainer' href="">
                            <Image onClick={handleHome} className='header-logo' src='https://i.ibb.co/gFKx1Z4/Clarex-final-White.png' />
                            <span className='betaLive'>Beta live</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="ms-auto header-menu">
                                <NavDropdown className='clarexDropdown' id='dropdownMenu'
                                    id="nav-dropdown-dark-example"
                                    title="Clarex"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.3">
                                        <div className='dropdownItem'>
                                            <NavLink to="/ourStory">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <span>01</span>
                                                        <p>About Us</p>
                                                    </div>
                                                    <div>
                                                        <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                        <div className='dropdownItem'>
                                            <NavLink to="/teams">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <span>02</span>
                                                        <p>Our Team</p>
                                                    </div>
                                                    <div>
                                                        <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        <div className='dropdownItem'>
                                            <NavLink to="/allJobOffice">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <span>03</span>
                                                        <p>Our Partner</p>
                                                    </div>
                                                    <div>
                                                        <img className='dropdownIcon' src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cdf3b57c2428_icon-arrow-white-diag-lg.svg" alt="" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </NavDropdown.Item>

                                </NavDropdown>
                                <NavLink to="/expertises">Expertise</NavLink>
                                <NavLink to="/Sustainibility">Sustainibility</NavLink>
                                <NavLink to="/blogs">Blog</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <hr />
            </div>
        </>
    );
};

export default Header;