import React from 'react';
import About from './About/About';
import Slider from './BottomSlider/Slider';
import Hero from './Hero/Hero';
import Offer from './Offer/Offer';
import OrganicHey from './OrganicHey/OrganicHey';
import OurPartner from './OurPartner/OurPartner';

const Home = () => {
    return (
        <div className='container-fluid'>
            <Hero />
            <About />
            <Offer />
            <OrganicHey />
            <Slider />
            <OurPartner />
        </div>
    );
};

export default Home;