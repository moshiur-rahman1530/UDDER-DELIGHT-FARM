import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';
import logo from '../../images/udder-logo.png';
import './NavbarStyle.css';

const TopMenu = () => {
    const [state, setState] = useState(false);
    return (
        <div className='container-fluid'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <a className="navbar-brand d-lg-none" href="#"><img className='logo-image' src={logo} /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link href="/">Pricing</Nav.Link>
                        </Nav>
                        <a className="d-none d-lg-block" href="#">
                            <img className='logo-image' src={logo} />
                        </a>
                        <Nav>
                            {/* <Nav.Link href="/contact">More deets</Nav.Link> */}
                            {/* <Link to="/contact" className="nav-link">Contact</Link> */}
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            {/* <Link to="/contact">Contact</Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default TopMenu;