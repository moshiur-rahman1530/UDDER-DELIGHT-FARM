import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// import required modules
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs } from "swiper";

import dogWithMan from '../../../images/man-with-dog.jpg';
import oldMan from '../../../images/old-man-with-vgt.jpg';
import peopleField from '../../../images/group-people-in-out.jpg';
import officePeople from '../../../images/group-people-in-office.jpg';
import youngImg from '../../../images/senior-man-working-field-with-chest-vegetables.jpg';
import './Owner.css';
import OurPartner from '../OurPartner/OurPartner';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


const Owner = () => {
    const images = [dogWithMan, oldMan, peopleField, youngImg].map((number) => ({
        src: `${number}`,
        className: `img-fluid`
    }));


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // function handleShow(breakpoint) {
    //     setFullscreen(breakpoint);
    //     setShow(true);
    // }
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const fullscreen = useState(true);
    return (
        <div className='container-fluid'>
            <Container>
                <h1 className='my-5'>
                    <span className='offer-first'>TOM </span>
                    <span className='offer-last'>SMITH</span>
                </h1>
                <Row className='mb-5'>
                    <Col sm={12} md={3}>
                        <img className='img-fluid h-100' src={oldMan} alt="" />
                    </Col>
                    <Col sm={12} md={9} className='pb-3'>
                        <Row>
                            <Col sm={12} md={12}>
                                <p className='ownerText'>Tom Smith was truly a remarkable man, a glorious force of nature and brilliant light. Intelligent, funny, courageous, resilient, kind, and delightfully mischievous. His indomitable spirit was inspirational, his Joie de Vive contagious. He was the bright, shining star in the constellation of our family, the spark that lit up every gathering, the compelling flame we all were irresistibly drawn to, and impossible to man in a room. As a father to tom smith children, he is a fine example of a life well-lived.</p>
                            </Col>
                            <Col sm={12} md={12}>
                                <Row className='g-4'>
                                    <Col sm={12} md={3}>
                                        <div className="hover01 h-100 column">
                                            <div className='h-100' onClick={handleShow}>
                                                <figure className='h-100'>

                                                    <img className='gallery-img img-fluid h-100 w-100' src={youngImg} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className="hover01 h-100 column">
                                            <div className='h-100' onClick={handleShow}>
                                                <figure className='h-100'>
                                                    <img className='gallery-img img-fluid h-100 w-100' src={dogWithMan} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className="hover01 h-100 column">
                                            <div className='h-100' onClick={handleShow}>
                                                <figure className='h-100'>
                                                    <img className='gallery-img img-fluid h-100 w-100' src={peopleField} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className="hover01 h-100 column">
                                            <div className='h-100' onClick={handleShow} href={officePeople}>
                                                <figure className='h-100'>
                                                    <Link>
                                                        <img className='gallery-img img-fluid h-100 w-100' src={officePeople} alt="" />
                                                    </Link>
                                                </figure>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Modal show={show} onHide={handleClose} dialogclassName="modal-90w" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {/* <Swiper
                                            style={{
                                                "--swiper-navigation-color": "#fff",
                                                "--swiper-pagination-color": "#fff",
                                            }}
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            navigation={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            breakpoints={{
                                                "@0.00": {
                                                    slidesPerView: 1,
                                                    spaceBetween: 10,
                                                },
                                                "@0.75": {
                                                    slidesPerView: 1,
                                                    spaceBetween: 10,
                                                },
                                                "@1.00": {
                                                    slidesPerView: 1,
                                                    spaceBetween: 10,
                                                },
                                                "@1.50": {
                                                    slidesPerView: 1,
                                                    spaceBetween: 10,
                                                },
                                            }}
                                            modules={[Autoplay, Navigation]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <img className='gallery-img img-fluid h-100 w-100' src={youngImg} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img className='gallery-img img-fluid h-100 w-100' src={dogWithMan} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img className='gallery-img img-fluid h-100 w-100' src={peopleField} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img className='gallery-img img-fluid h-100 w-100' src={officePeople} alt="" />
                                            </SwiperSlide>
                                        </Swiper> */}

                                        <div>
                                            {/*modal carusel  */}

                                            {/* <Carousel autoPlay infiniteLoop showArrows useKeyboardArrows emulateTouch>
                                                <div>
                                                    <img className='gallery-img img-fluid h-100 w-100' src={youngImg} alt="" />
                                                </div>
                                                <div>
                                                    <img className='gallery-img img-fluid h-100 w-100' src={dogWithMan} alt="" />
                                                </div>
                                                <div>

                                                    <img className='gallery-img img-fluid h-100 w-100' src={peopleField} alt="" />
                                                </div>
                                                <div>

                                                    <img className='gallery-img img-fluid h-100 w-100' src={officePeople} alt="" />
                                                </div>
                                            </Carousel> */}
                                            {/* <Carousel images={images} shouldMinimizeOnClick passiveIcon /> */}

                                            <Carousel shouldMinimizeOnClick passiveIcon >
                                                <div>
                                                    <img className='fullscreen-carusel-image' src={youngImg} alt="" />
                                                </div>
                                                <div>
                                                    <img className='fullscreen-carusel-image' src={dogWithMan} alt="" />
                                                </div>
                                                <div>

                                                    <img className='fullscreen-carusel-image' src={peopleField} alt="" />
                                                </div>
                                                <div>

                                                    <img className='fullscreen-carusel-image' src={officePeople} alt="" />
                                                </div>
                                            </Carousel>
                                        </div>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        {/* <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button> */}
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <OurPartner />
        </div>
    );
};

export default Owner;