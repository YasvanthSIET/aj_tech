import React from "react";
import circle from './assets/circle.png';
import home1 from './assets/home1.jpg';
import home2 from './assets/home2.png';
import home3 from './assets/home3.png';
import home4 from './assets/home4.jpg';
import { FaCode } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import { FaMobileAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineWebhook } from "react-icons/md";
import { SiBmcsoftware } from "react-icons/si";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiSquareLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home container-fluid p-3">
            <div className="row">
                <div className="col-12 col-md-6 parent parent1">
                    <img src={circle} alt="about-circle" width="300px" height="300px" className="m-auto d-block circle"/>
                    <img src={home1} alt="home" width="380px" height="250px" className="img"/>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h3>Digital Landscape with AJ InfoTeck 's Expert Marketing Strategies</h3>
                    <p className="my-3">We are the windows to the digital world. We strive to enrich your business, enhance your brand image, and drive customer engagement and conversions. With our strategies and innovative approaches, we ensure your success in today's competitive digital world.</p>
                    <Link to={'/About'}> <button type="button" className="btn">About Us</button> </Link>
                </div>
            </div>
            <div className="row text-center mt-2">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="batch">
                        <span><FaUserGroup /></span>
                        <h4>Customer Friendly</h4>
                        <small>Helping Customers to meet their requirments and ideas.</small>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="batch">
                        <span><FaCode /></span>
                        <h4>Quality Products</h4>
                        <small>Providing secure and quality products to all your business.</small>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="batch">
                        <span><FaDatabase /></span>
                        <h4>Innovativeness</h4>
                        <small>Trying new approaches to solve problems in all ways.</small>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="batch">
                        <span><SlGraph /></span>
                        <h4>Timely Delivery</h4>
                        <small>Ensuring quality, accuracy and reliability of deliverables.</small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 parent parent2">
                    <img src={circle} alt="about-circle" width="300px" height="300px" className="mx-auto mt-4 d-block circle"/>
                    <img src={home2} alt="home" width="380px" height="250px" className="img"/>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h3 className="text-center">Find out the key to the World</h3>
                    <p className="my-3">Our full-service team of inmakes professionals are ready here to help you.</p>
                    <div className="badges">
                        <div>
                            <span className="icon"><FaCode /></span>
                            <small className="text">Web App Development</small>
                        </div>
                        <div>
                            <span className="icon"><FaMobileAlt /></span>
                            <small className="text">Mobile App Development</small>
                        </div>
                        <div>
                            <span className="icon"><FaDesktop /></span>
                            <small className="text">Desktop App Development</small>
                        </div>
                        <div>
                            <span className="icon"><FaDigitalOcean /></span>
                            <small className="text">Digital Marketing</small>
                        </div>
                        <div>
                            <span className="icon"><MdOutlineBrandingWatermark /></span>
                            <small className="text">Branding</small>
                        </div>
                        <div>
                            <span className="icon"><SiBmcsoftware /></span>
                            <small className="text">Software Support</small>
                        </div>
                        <div>
                            <span className="icon"><MdOutlineWebhook /></span>
                            <small className="text">Web Designing</small>
                        </div>
                        <div>
                            <span className="icon"><FaCircleCheck /></span>
                            <small className="text">UI/UX Designing</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 parent parent3">
                    <img src={circle} alt="about-circle" width="300px" height="300px" className="mx-auto mt-5 d-block circle"/>
                    <img src={home3} alt="home" width="380px" height="250px" className="img"/>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h3>Your Gateway to Digital Success</h3>
                    <p className="my-3">We have a deep understanding of client thoughts. We are the vision of your target customer and build trust. Let us create you as a brand that leaves an enduring conception. Our experts will work closely with you to create engaging and shareable content that connects with your audience. We know the power of social media platforms and will utilize them strategically to expand your brand's reach.</p>
                    <p className="mb-3">We know your business objectives, target market, and competition to develop a comprehensive brand strategy that aligns with your vision. Our strategic approach ensures that every element of your brand communicates a consistent message and reinforces your core values.</p>
                    <Link to={'/Dm'}> <button type="button" className="btn">Learn more</button> </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 parent parent4">
                    <img src={circle} alt="about-circle" width="300px" height="300px" className="mx-auto mt-5 d-block circle"/>
                    <img src={home4} alt="home" width="380px" height="250px" className="img"/>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h3>BPO Services</h3>
                    <p className="my-3">Our BPO firm provides a variety of speech process solutions to assist businesses in a variety of industries. We have a staff of highly qualified and experienced individuals who work hard to deliver exceptional customer service, sales support, and other services to our clients. We are your go-to service provider for inbound and outbound call center services. Our cutting-edge technologies and personalized solutions enable us to exceed expectations and assist you in improving the image of your company.</p>
                    <p className="mb-3">Our non-voice process solutions are intended to help you streamline and digitize your business processes. We provide a range of back-office and front-office support services to assist you in reducing costs and optimizing operations. Email support, chat support, social media management, and other non-voice process services are available. We use cutting-edge technology and software to provide high-quality, effective services.</p>
                    <Link to={'/About'}> <button type="button" className="btn">Learn more</button> </Link>
                </div>
            </div>
            <div className="row text-center mt-2">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="batch batch2">
                        <span><FaUserGroup /></span>
                        <h4>Highly Qualified Team</h4>
                        <small>We have a highly skilled team to assist our clients in getting what they need and anticipate.</small>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="batch batch2">
                        <span><PiSquareLogoLight /></span>
                        <h4>Technology Consultation</h4>
                        <small>We offer technological consulting to help choose the best technology for a specific need.</small>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="batch batch2">
                        <span><HiOutlineSquares2X2 /></span>
                        <h4>Customer Support</h4>
                        <small>All of our clients receive committed, 24/7 customer support that is simple to obtain.</small>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="batch batch2">
                        <span><AiOutlineSafety /></span>
                        <h4>Safe and Secure</h4>
                        <small>All of our customers receive extremely safe and secure products from us.</small>
                    </div>
                </div>
            </div>



            
            
            
            
            
            
            
            
            
            

        </div>
    )
}

export default Home;