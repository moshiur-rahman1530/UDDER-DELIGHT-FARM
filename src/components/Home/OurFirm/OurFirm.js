import React from 'react';
import './OurFirm.css';
import firmHeroImg from '../../../images/our-firm-photo.jpg';
import firmAboutImg from '../../../images/blog-img-02.jpg';
import manImg1 from '../../../images/cart-man.jpg';
import manImg2 from '../../../images/child-man.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import signature from '../../../images/signature.png';
import milkImg from '../../../images/cover-milk-1.jpg';
import butterImg from '../../../images/butter-image.jpg';
import iceImg from '../../../images/Ice_Cream_Compressed-43.jpg';
import { NavLink } from 'react-router-dom';
import OurPartner from '../OurPartner/OurPartner';

const OurFirm = () => {
    return (
        <div className='container-fluid'>
            <div className="firm-top-image">
                <img className="img-fluid" src={firmHeroImg} alt="" />
            </div>
            <div className='organic-hey'>
                <div className="container">

                    <h4 className='or-heading-text font-chelsea text-white'>
                        {/* <span className='offer-first'>WHAT WE</span> <span className='offer-last'>OFFER</span> */}
                        Enjoying the simple things in life and returning to basics. Rekindling the values of empathy, tolerance, compassion, trust, and love in ourselves, our farm and our community.
                    </h4>
                </div>
            </div>
            <div className="about-section">
                <Row className='padding-0 g-0'>
                    <Col sm={13} md={6} className=''>
                        <div className='firm-about-img'>
                            <img className="w-100" src={firmAboutImg} alt="" />
                        </div>
                    </Col>
                    <Col sm={13} md={6} className='section-bg'>
                        <div className='text-container'>
                            <h1 className='mt-4 text-center'>
                                <span className='offer-first'>WHAT WE </span>
                                <span className='offer-last'>DO?</span>
                            </h1>
                            <h2 className='font-chelsea text-center my-4 fs-4'>
                                Clean. Organic. Sustainable.
                            </h2>

                            <p className='firm-about-text'>
                                A no-till farming system, as an aspect of conservation farming, allows Udder Delight Farms to avoid the use of large amounts of farm machinery. It excludes soil tillage, preventing crop residue from being incorporated into the soil. Also, crops are sown in the field full of residue from the previous crop. No-till farming, therefore, includes minimal soil disturbance, direct sowing, crop rotation and helps sequester carbon. Udder Delight Farms is able to increase the benefits across its harvest. These include reduced soil disturbances, higher quality health management, lower labour costs and enhance crop residue helping with water filtration and reduced evaporation of this precious resource.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <Container>
                <Row style={{ margin: '40px 0px' }}>
                    <Col sm={12} md={4}>
                        <div className='p-2'>
                            <h1 className='font-chelsea mt-4' style={{ fontSize: '26px' }}>NATURAL PEST CONTROL</h1>
                            <p className='firm-menu-text'>
                                Natural pest control or broad-spectrum insecticides used in conventional farming kill off the other “good bugs” that could otherwise suppress the population of pest insects. We use good natural and non-disruptive tools to naturally ‘biocontrol’ pests. These Integrated Pest Management practices (IPM) are better for the plants, the environment and us.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='p-2'>
                            <h1 className='font-chelsea mt-4' style={{ fontSize: '26px' }}>ROTATIONAL DIVERSITY</h1>
                            <p className='firm-menu-text'>
                                A good idea for any kind of farming! It breaks pest cycles. It spreads out risk. When legumes are in the rotation it reduces nitrogen fertilizer needs. Diverse rotations have been a long tradition of Organic farming.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='p-2'>
                            <h1 className='font-chelsea mt-4' style={{ fontSize: '26px' }}>COVER CROPPING</h1>
                            <p className='firm-menu-text'>
                                The practice of planting a single or mixed stand to grow after an annual crop is harvested so that it grows until winter sets in and then again in the early spring before planting of the next crop. This cover crop is not harvested and serves instead as a way to “feed” the soil ecosystem and build up organic matter. Sheep love it too!
                            </p>
                        </div>
                    </Col>
                </Row>

                <div className="section-video">
                    <iframe className='farm-video' src="https://www.youtube.com/embed/c5MKlSoubOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Container>
            <Row className='g-0'>
                <Col sm={12} md={6}>

                    <Row className='g-0'>
                        <Col xs={6} md={6} className=''>
                            <div className='profile-img-container'>
                                <img className='profile-img' src={manImg1} alt="" />
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className='profile-img-container'>
                                <img className='profile-img' src={manImg2} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6} className='section-bg'>
                    <div className='text-container'>
                        <h1 className='mt-4 text-center mb-5'>
                            <span className='offer-first'>UDDER </span>
                            <span className='offer-last'>DELIGHT</span>
                        </h1>

                        <p className='profile-data'>
                            Tom Smith was truly a remarkable woman, a glorious force of nature and brilliant light. Intelligent, funny, courageous, resilient, kind, and delightfully mischievous. Her indomitable spirit was inspirational, her Joie de Vive contagious. She was the bright, shining star in the constellation of our family, the spark that lit up every gathering, the compelling flame we all were irresistibly drawn to, and impossible to miss in a room.
                        </p>

                        <h6 className='text-center'>
                            <img className='signature-img' src={signature} alt="" />
                        </h6>

                        <div className="text-center">
                            <NavLink className='learn-link' to="/owner">LEARN MORE</NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="bg-brown py-5">
                {/* <Container> */}
                <div className="container">
                    <Row className='g-4 text-center'>
                        <Col sm={12} md={3} className='d-flex justify-content-center align-items-center'>
                            <div>
                                <h1 className='mt-4'>
                                    <span className='offer-first d-block'>DAIRY </span>
                                    <span className='offer-last'>PRODUCTS</span>
                                </h1>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className=''>
                                <img className='img-fluid' src={iceImg} alt="" />
                            </div>
                            <h6 className='font-chelsea mt-4'>Ice Cream</h6>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className=''>
                                <img className='img-fluid' src={butterImg} alt="" />
                            </div>
                            <h6 className='font-chelsea mt-4'>Butter</h6>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className=''>
                                <img className='img-fluid' src={milkImg} alt="" />
                            </div>
                            <h6 className='font-chelsea mt-4'>Milk</h6>
                        </Col>
                    </Row>
                </div>
                {/* </Container> */}
            </div>
            <OurPartner />
        </div>
    );
};

export default OurFirm;