import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './OurPartner.css';
import kaziLogo from '../../../images/kazi.png';
import nisagorLogo from '../../../images/nilsagor.jpg';
import qualityLogo from '../../../images/quality.png';

const OurPartner = () => {
    return (
        <div className='partner-section'>
            <div className="section-title pt-5 mb-4">
                <h3 className='text-center'>
                    <span className='partner-first'>OUR</span> <span className='partner-last'>PARTNERS</span>
                </h3>
            </div>

            <Row>
                <Col sm={12} md={4}>
                    <div className="partner-image">
                        <img onClick={() => window.open("https://www.kazifarms.com/", "_blank")} src={kaziLogo} alt="" /></div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="partner-image">
                        <img onClick={() => window.open("https://www.hr.com/buyersguide/company/nilsagor_group", "_blank")} src={nisagorLogo} alt="" /></div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="partner-image">
                        <img onClick={() => window.open("https://www.qfl.com.bd/", "_blank")} src={qualityLogo} alt="" /></div>
                </Col>
            </Row>

        </div>
    );
};

export default OurPartner;