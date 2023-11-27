import React from "react";
import logo from './assets/logo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';

const Info = () => {
    return(
        <div className="info container-fluid">
            <div className="row mt-4">
                <div className="col-md-4 col-xl-3" id="con">
                    <img src={logo} alt="logo" id="img1" clas className="img-fluid"/>
                </div>
                <div className="col-md-8 col-xl-3" id="con">
                    <div>
                        <h5>About AJ InfoTeck</h5>
                        <p className="detail">Dominate the Digital Landscape with AJ InfoTeck 's Expert Marketing Strategies. Your Gateway to Digital Success Find out the key to the World</p>
                        <p className="detail">Contact :- +91 8122788484</p>
                        <div id="img2">
                            <span><img src={facebook} alt="facebook" className="me-2"/></span>
                            <span><img src={instagram} alt="instagram" /></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xl-3" id="con">
                    <div>
                        <h5>Quick Links</h5>
                        <ul className="detail">
                            <li>Home</li>
                            <li>About</li>
                            <li>Digital marketing</li>
                            <li>Ad's Making</li>
                            <li>BPO</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8 col-xl-3" id="con">
                    <div>
                        <h5>Address</h5>
                        <address className="detail">13/1A, 2nd Floor,<br />STC College Road,<br />Perumalpuram,<br />Tirunelveli - 627 007,<br />Tamil Nadu.</address>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;