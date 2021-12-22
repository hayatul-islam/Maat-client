import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='py-4' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className='header-logo' src='https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cd04d07c241b_logo-white.png' />
                    </Navbar.Brand>
                    <Nav className="ms-auto header-menu">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/">Expertise</Nav.Link>
                        <Nav.Link to="/">Maat</Nav.Link>
                        <Nav.Link to="/">Blog</Nav.Link>
                        <Nav.Link to="/">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;