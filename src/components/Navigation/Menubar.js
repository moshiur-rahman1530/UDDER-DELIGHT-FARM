import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';
import logo from '../../images/newlogo.png';
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
            <nav className="navbar navbar-expand-lg navbar-style">
                <NavLink className="navbar-brand d-lg-none" to='/'><img className='logo-image' src={logo} /></NavLink>

                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span id="nav-toggle-button" className="navbar-toggler-icon text-danger"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav mx-auto d-flex align-items-center">
                        <li className="nav-item">
                            <Nav.Link className="nav-link" as={NavLink} to={'/'} style={isActive => ({
                                color: isActive ? "rgb(122, 170, 50)" : "white"
                            })}>HOME</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" as={NavLink} to={'/firm'} style={isActive => ({
                                color: isActive ? "rgb(122, 170, 50)" : "white"
                            })}>OUR FARM</Nav.Link>
                        </li>

                        <NavLink className="d-none d-lg-block" to="/">
                            <img className='logo-image' src={logo} />
                        </NavLink>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" as={NavLink} to={'/owner'} style={isActive => ({
                                color: isActive ? "rgb(122, 170, 50)" : "white"
                            })}>UDDER DELIGHT</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" as={NavLink} to={'/contact'} style={isActive => ({
                                color: isActive ? "rgb(122, 170, 50)" : "white"
                            })}>CONTACT US</Nav.Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </div>
    );
};

export default Menubar;