import React from 'react';
import './About.css';
// import aboutBanner from '../../../images/big-img-03';
import aboutBanner from '../../../images/big-img-03.jpg'
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (

        <Row>
            <Col sm={12} md={6}>
                <div>
                    <img className='about-img h-100' src={aboutBanner} alt="" />
                </div>
            </Col>
            <Col sm={12} md={6} className='about-text-container'>
                <div className="about-text">
                    <div>
                        <h1 className='text-center mb-5'>
                            <span className='about-title-first'>WELCOME TO</span>
                            <span className='about-title-last'> BIG E COUNTRY FARMS</span>
                        </h1>
                    </div>
                    <div>
                        <h3 className='font-chelsea text-center mb-5'>
                            Big E Country Farms exemplifies healthy country living, sustainable farming benefiting our families, friends and community members.
                        </h3>
                    </div>
                    <div>
                        <p className='heading-text text-center'>
                            Celebrating the joy of eating fresh organic vegetables, sustainably grown in our very own community. Relaxing to the sounds of nature, soothing breezes in the pines, the calming sound ofbirds singing and bees buzzing, at Big E Country Farms nature fills the air. A walk through the trees with the dogs. Sipping coffee with friends and family while enjoying the views of the neighbouring farms. These are the simple things, the gifts of living life in Central Saanich.
                        </p>
                        <p className='heading-text text-center'>
                            We are blessed to live here, with a deep sense of belonging and community. From Conrad and his friendly Pitty, to Gerry and her cat, to James and Ray and their kind neighbourly help, farming in Central Saanich is above all about helping others. This is a different lifestyle than most enjoy, and it is a healthier way to live life. The invaluable knowledge we learn from each other, from no-till farming, and crop rotation, to jam jar recipes and potlucks. This is what drives us and nourishes us as a community
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default About;