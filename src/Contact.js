import React from "react";
import contact from './assets/contact.png'

const Contact = () => {
    return(
        <div className="contact container-fluid">
            <h1 className="text-center mt-3 text-secondary">Contact Us</h1>
            <div className="row mt-4">
                <div className="col-md-6 px-5 py-0">
                    <img src={contact} alt="contact" width="100%" height="85%" />
                </div>
                <div className="col-md-6 px-5">
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
        </div>
        
    )
}

export default Contact;