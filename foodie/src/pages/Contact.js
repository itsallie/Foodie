import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zlpdou8', 'template_jmv7c5f', form.current, 'user_vdrvWF4OtqF7ty3N0qW8Q')
            .then((result) => {
                alert('Thank you for your feedback!')
                console.log(result.text);
            }, (error) => {
                alert('Please try again.')
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="form">
            <h1 className="contact-text">CONTACT US!</h1>
            <p className="contact-text">Send us your feedback!</p>
            <form ref={form} onSubmit={sendEmail} className="row">
                <div className="form-group col-6">
                    <label className="formText m-2" htmlFor="fname">First Name:</label>
                    <input className="form-control" type="text" name="fname" placeholder="First Name" required />
                </div>
                <div className="form-group col-6">
                    <label className="formText m-2" htmlFor="lname">Last Name:</label>
                    <input className="form-control" type="text" name="lname" placeholder="Last Name" required />
                </div>
                <div className="form-group">
                    <label className="formText m-2" htmlFor="email">Email:</label>
                    <input className="form-control" type="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label className="formText m-2" htmlFor="subject">Subject:</label>
                    <input className="form-control" type="text" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                    <label className="formText m-2" htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" placeholder="Enter message here..." required />
                </div>
                <button type="submit" className="btn btn-dark m-2">SUBMIT</button>
            </form>
        </div>
    );
};

export default Contact;