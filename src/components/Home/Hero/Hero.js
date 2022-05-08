import React from 'react';
import './Hero.css';
import heroImg from '../../../images/hero.jpg';

const Hero = () => {
    return (
        <div>
            <img className='img-fluid imagere' src={heroImg} alt="" />
        </div>
    );
};

export default Hero;