import React from 'react';
import './Offer.css';
import gelaryImg1 from '../../../images/gallery-img-01.jpg';
import gelaryImg2 from '../../../images/gallery-img-02.jpg';
import gelaryImg3 from '../../../images/gallery-img-03.jpg';
import gelaryImg4 from '../../../images/gallery-img-08.jpg';
import gelaryImg5 from '../../../images/gallery-img-10.jpg';
import gelaryImg6 from '../../../images/gallery-img-11.jpg';
import { Container } from 'react-bootstrap';

const Offer = () => {
    return (
        <Container>
            <div className="py-5">
                <div className="section-title mb-5">
                    <h3 className='text-center'>
                        <span className='offer-first'>WHAT WE</span> <span className='offer-last'>OFFER</span>
                    </h3>
                </div>

                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg">
                                <img className='h-100' src={gelaryImg1} alt="Lights" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>Cucumber</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg">
                                <img className='h-100' src={gelaryImg2} alt="Lights" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>tomato</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg">
                                <img className='h-100' src={gelaryImg3} alt="Lights" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>Vegetable pepper</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg">
                                <img className='h-100' src={gelaryImg4} alt="Lights" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>pea</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg">
                                <img className='h-100' src={gelaryImg5} alt="Lights" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>Onion</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg">
                                <img className='h-100' src={gelaryImg6} alt="Lights" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>Turnip</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Offer;