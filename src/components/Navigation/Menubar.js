import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';
import logo from '../../images/newlogo.png';
import ScrollToTop from "react-scroll-to-top";
import './NavbarStyle.css';

const Menubar = () => {
    let history = useHistory();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);


    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    function HandleHome(e) {
        e.preventDefault();
        // e.stopPropagation();
        // let history = useHistory();
        // history.push('/');
        // window.location.href = "/";
        history.replace("/")

        // useEffect(() => {
        //     history.push('/');
        // }, []);
    }
    function HandleContact(e) {
        e.preventDefault();
        // e.stopPropagation();
        // let history = useHistory();
        // history.push('/contact');
        history.replace("/contact")
        // window.location.href = "/contact";

        // useEffect(() => {
        //     history.push('/contact');
        // }, []);
    }

    return (
        <div className='container-fluid'>
            <div>
                <ScrollToTop smooth color='white' width="18" height="28" style={{ backgroundColor: 'black', width: '34px', height: '34px' }} viewBox="0 0 1000 1000" svgPath="M10,713.1l63.1,63.1L500,349.9l426.9,426.4l63.1-63.1L500,223.8L10,713.1z" />
            </div>
            <nav className="navbar navbar-expand-lg navbar-style">
                <NavLink className="navbar-brand d-lg-none" to='/'><img className='logo-image' src={logo} /></NavLink>

                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 172 172"
                    style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g></svg> */}

                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span id="nav-toggle-button" className="navbar-toggler-icon text-danger"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav mx-auto d-flex align-items-center">
                        <li className="nav-item">
                            <Nav.Link className="nav-link" as={NavLink} to={'/'} style={isActive => ({
                                color: isActive ? "#78764A" : "white"
                            })}>HOME</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" as={NavLink} to={'/about'} style={isActive => ({
                                color: isActive ? "#78764A" : "white"
                            })}>OUR FARM</Nav.Link>
                        </li>

                        <NavLink className="d-none d-lg-block" to="/">
                            <img className='logo-image' src={logo} />
                        </NavLink>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" as={NavLink} to={'/smith'} style={isActive => ({
                                color: isActive ? "#78764A" : "white"
                            })}>UDDER DELIGHT</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" as={NavLink} to={'/contact'} style={isActive => ({
                                color: isActive ? "#78764A" : "white"
                            })}>CONTACT US</Nav.Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </div>
    );
};

export default Menubar;