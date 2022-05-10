import React from 'react';
import { Col, Row } from 'react-bootstrap';
import cowImg from '../../../images/testament-right-768x835.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Mousewheel } from "swiper";



import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Row>
                <Col sm={12} md={6} className='cus-padding d-flex justify-content-center align-items-center'>
                    <div className="swiper-container">
                        <Swiper
                            slidesPerView={1}
                            mousewheel={true}
                            loop={true}
                            // spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            // breakpoints={{
                            //     601: {
                            //         slidesPerView: 1,
                            //         // spaceBetween: 30,
                            //     },
                            //     1024: {
                            //         slidesPerView: 1,
                            //         // spaceBetween: 30,
                            //     },
                            // }}
                            modules={[Pagination, Autoplay, Mousewheel]}
                            className="mySwiper swipers"
                        >
                            <SwiperSlide>
                                <div>
                                    <div className="d-flex align-items-center">
                                        {/* <FontAwesomeIcon icon="fa-solid fa-quote-left" /> */}
                                        <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft} />
                                        <div className="">

                                            <h4 className="font-chelsea h4"><span>Boris Yeltsin</span></h4>
                                            <div className=""><p>from United States</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-4 text-start"><p> Love these. I've been wearing them for a year now and they still look awesome.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="d-flex align-items-center">
                                        {/* <FontAwesomeIcon icon="fa-solid fa-quote-left" /> */}
                                        <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft} />
                                        <div className="">
                                            <h4 className="font-chelsea h4"><span>Boris Yeltsin</span></h4>
                                            <div className=""><p>from United States</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-4 text-start"><p> Love these. I've been wearing them for a year now and they still look awesome.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="d-flex align-items-center">
                                        {/* <FontAwesomeIcon icon="fa-solid fa-quote-left" /> */}
                                        <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft} />
                                        <div className="">
                                            <h4 className="font-chelsea h4"><span>Boris Yeltsin</span></h4>
                                            <div className=""><p>from United States</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-4 text-start"><p> Love these. I've been wearing them for a year now and they still look awesome.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
                <Col sm={12} md={6} className='slider-nopadding'>
                    <div>
                        <img className='slider-img h-100' src={cowImg} alt="" />
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Slider;