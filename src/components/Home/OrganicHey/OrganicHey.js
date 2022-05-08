import React from 'react';
import './OrganicHey.css';
import cowImg from '../../../images/cow5.jpg';
import { Col, Row } from 'react-bootstrap';

const OrganicHey = () => {
    return (
        <div>
            <div className='organic-hey'>
                <div className="container">

                    <h4 className='or-heading-text font-chelsea text-white'>
                        {/* <span className='offer-first'>WHAT WE</span> <span className='offer-last'>OFFER</span> */}
                        Enjoying the simple things in life and returning to basics. Rekindling the values of empathy, tolerance, compassion, trust, and love in ourselves, our farm and our community.
                    </h4>
                </div>

            </div>

            <Row>
                <Col sm={12} md={6} className='organic-nopadding'>
                    <div>
                        <img className='cow-img h-100' src={cowImg} alt="" />
                    </div>
                </Col>
                <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                    <div className="">
                        <h1 className='text-center'>
                            <span className='about-title-first'>YOUR <span className='about-title-middle'>FURRY</span></span>
                            <span className='about-title-last'>FRIENDS</span>
                        </h1>

                        <h4 className='or-heading-text font-chelsea'>
                            Organic hay for your cows.
                        </h4>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default OrganicHey;