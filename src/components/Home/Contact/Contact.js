import React from 'react';
import OurPartner from '../OurPartner/OurPartner';
import './Contact.css';
import ContactFrom from './ContactFrom';
import GMap from './GMap';

const Contact = () => {
    return (
        <div className='container-fluid'>
            <GMap />
            <div className='contact-container'>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h3 className='contact-heading-text font-chelsea text-white'>
                                Dhaka,Bangladesh
                            </h3>
                        </div>
                        <div className="col-lg-6 col-sm-12 text-center">
                            <h3 className='contact-heading-email font-chelsea text-white'>
                                info@udderdelightfarms.com
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
            <ContactFrom />
            <OurPartner />
        </div>
    );
};

export default Contact;