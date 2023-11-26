import React from "react";
import contact from './assets/contact.png';


const Contact = () => {
    return(
        <div className="contact container-fluid px-4">
            <h1 className="text-center mt-3 text-secondary">Contact Us</h1>
            <div className="row mt-4">
                <div className="col-md-6 pe-3">
                    <img src={contact} alt="contact" width="100%" height="85%" />
                </div>
                <div className="col-md-6 ps-3">
                    <form action="" className="form">
                        <div>
                            <label htmlFor="name" className="form-label">Name <span>*</span></label>
                            <input type="text" name="name" id="name" placeholder="Name" className="form-control"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label">Email <span>*</span></label>
                            <input type="email" name="email" id="email" placeholder="Email" className="form-control"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="form-label">Phone Number <span>*</span></label>
                            <input type="tel" name="phone" id="phone" placeholder="Phone" className="form-control"/>
                        </div>
                        <div>
                            <label htmlFor="subject" className="form-label">Subject <span>*</span></label>
                            <input type="text" name="subject" id="subject" placeholder="Subject" className="form-control"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="form-label">Message <span>*</span></label>
                            <textarea class="form-control" rows="3" id="message" name="message"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4038566.820891077!2d73.30408471326655!3d8.69982038467854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04135e313d5495%3A0xb07b24533e63b70d!2sAJ%20INFOTECK!5e0!3m2!1sen!2sin!4v1700894223120!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
        </div>
        
    )
}

export default Contact;