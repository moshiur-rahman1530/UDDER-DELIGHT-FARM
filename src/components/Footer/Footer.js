import React from 'react';
import { NavLink } from 'react-router-dom';
import footerImg from '../../images/newlogo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-fluid'>
            <footer
                class="text-center text-lg-start text-white"
                style={{ backgroundColor: '#3e4551' }}
            >
                <div class="container footer-section">
                    <section class="">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="footer-img">
                                    <NavLink to="/"> <img src={footerImg} alt="" /></NavLink>
                                </div>

                                <p className='footer-fram-text'>
                                    Enjoying the simple things in life and returning to basics. Rekindling the values of empathy, tolerance, compassion, trust, and love in ourselves, our farm and our community.
                                </p>
                            </div>
                            <div class="col-lg-1 d-none d-lg-block">
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white text-decoration-none"> Home</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white text-decoration-none">Our Farm</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white text-decoration-none">Udder Delight</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white text-decoration-none">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white text-decoration-none">Kazi Farms</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Information</h5>
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white text-decoration-none">3161 Campion Rd, Victoria BC, Canada</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white text-decoration-none">info@bigecountryfarms.com</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white text-decoration-none"> Follow Us On Instagram</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div
                    class="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/"
                    >MDBootstrap.com</a
                    >
                </div>
            </footer >
        </div >
    );
};

export default Footer;