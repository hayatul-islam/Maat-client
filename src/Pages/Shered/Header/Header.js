import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
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
                        <NavLink to="/">Maat</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <hr className='bg-white' />
        </div>
    );
};

export default Header;