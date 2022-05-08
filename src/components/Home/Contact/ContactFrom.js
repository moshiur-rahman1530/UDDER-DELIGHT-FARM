import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactFrom = () => {


    const form = useRef();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gvw936g', 'template_wsvh0v2', e.target, 'jOKX5LXnhzh4cAm9K')
            .then((result) => {
                setSuccess(result.text);
            }, (error) => {
                setError(error.text);
            });
        e.target.reset();
    };


    return (
        <div class="container contact">
            <div class="row">
                <div class="mt-5">
                    <div class="contact-info text-center">
                        <h2>
                            <span className='offer-first'>FEEL FREE TO</span> <span className='offer-last'>CONTACT US</span>
                        </h2>
                        <h4 className='font-chelsea'>We'd like to know what you think!</h4>
                    </div>
                </div>
                <div class="">
                    <div class="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            {
                                success && <div class="alert alert-success" role="alert">
                                    Message sent successfully !!
                                </div>
                            }
                            {
                                error && <div class="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            }
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div class="form-group">
                                        <label class="control-label col-sm-2" for="fname">Name</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="fname" placeholder="Your Name" name="to_name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">

                                    <div class="form-group">
                                        <label class="control-label col-sm-2" for="email">Email</label>
                                        <div class="col-sm-12">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email" name="from_name" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label class="control-label col-sm-2" for="comment">Message</label>
                                        <div class="col-sm-12">
                                            <textarea class="form-control" name="message" placeholder="Your Message" rows="5" id="comment" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group my-4">
                                <div class="col-sm-offset-2 col-sm-10">
                                    {/* <button type="submit" class="btn">Send Message</button> */}
                                    <input className="button" type="submit" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFrom;