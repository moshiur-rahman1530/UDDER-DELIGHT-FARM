import React from 'react';
import { NavLink } from 'react-router-dom';
import footerImg from '../../images/newlogo.png';
// import ScrollUpButton from "react-scroll-up-button";
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-fluid'>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: '#3e4551' }}
            >
                <div className="container footer-section">
                    <section className="">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="footer-img">
                                    <NavLink style={isActive => ({
                                        color: isActive ? "#78764A" : "white"
                                    })} to="/"> <img src={footerImg} alt="" /></NavLink>
                                </div>

                                <p className='footer-fram-text'>
                                    Enjoying the simple things in life and returning to basics. Rekindling the values of empathy, tolerance, compassion, trust, and love in ourselves, our farm and our community.
                                </p>
                            </div>
                            <div className="col-lg-1 d-none d-lg-block">
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <NavLink style={isActive => ({
                                            color: isActive ? "#78764A" : "white", textDecoration: isActive ? "none" : "none"
                                        })} to="/" className="text-white text-decoration-none">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={isActive => ({
                                            color: isActive ? "#78764A" : "white", textDecoration: isActive ? "none" : "none"
                                        })} to="/about" className="text-white text-decoration-none">Our Farm</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={isActive => ({
                                            color: isActive ? "#78764A" : "white", textDecoration: isActive ? "none" : "none"
                                        })} to="/home" className="text-white text-decoration-none">Udder Delight</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={isActive => ({
                                            color: isActive ? "#78764A" : "white", textDecoration: isActive ? "none" : "none"
                                        })} to="/contact" className="text-white text-decoration-none">Contact Us</NavLink>
                                    </li>
                                    <li>
                                        <a className="text-white text-decoration-none" href="https://www.kazifarms.com" target="_blank" rel="noopener noreferrer">Kazi Farms</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Information</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Uttra 1213, Dhaka,Bangladesh </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">info@udderdelightfarms.com</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none"> Follow Us On Instagram</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"
                    >MDBootstrap.com</a
                    >
                </div>
            </footer >
            <div>
                {/* <ScrollUpButton style={{ width: '45px', height: '40px', backgroundColor: 'black', padding: '6px' }} StopPosition={0}
                    ShowAtPosition={150}
                    EasingType='easeOutCubic'
                    AnimationDuration={500}
                    ContainerClassName='navbar'
                    TransitionClassName='navbar' /> */}

                {/* <BackToTop
                    showOnScrollUp
                    showAt={100}
                    speed={1500}
                    easing="easeInOutQuint"
                >
                    <span>scroll up</span>
                </BackToTop> */}
            </div>
        </div >
    );
};

export default Footer;