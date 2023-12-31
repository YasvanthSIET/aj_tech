import React from "react";
import { Link } from "react-router-dom";
import about from './assets/about.jpg';
import about1 from './assets/about1.jpg';
import circle from './assets/circle.png'
import { FaCode, FaCodeMerge, FaExplosion, FaCalendarCheck } from "react-icons/fa6";

const About = () => {
    return(
        <div className="about mt-3 container-fluid">
            <h1 className="text-center">About us</h1>
            <div className="row">
                <div className="col-md-6 px-4 py-4">
                    <img src={about} alt="img-about" width="100%" height="100%"/>
                </div>
                <div className="col-md-6  px-4 py-4">
                    <h3 className="mb-3">Your Gateway to Digital Success find out the key to the World</h3>
                    <p>We are the windows to the digital world. We strive to enrich your business, enhance your brand image, and drive customer engagement and conversions. With our strategies and innovative approaches, we ensure your success in today's competitive digital world</p>
                    <p>Using tried and tested methods in digital marketing like social media and SEO, we are eager to take your brand to the next level. Reach out to your customers in relevant ways through different platforms and raise your online visibility.</p>
                    <Link to={'/Dm'}><button className="btn">Our Services</button></Link>
                </div>
            </div>
            <div className="row row2 mx-1 my-4">
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="content">
                        <h3 className="py-3 text-center">Our History</h3>
                        <p>AJ INFOTECK was established in 2022, December. From its inception, we set out on a mission to revolutionize the IT industry by providing cutting-edge solutions that cater to our clients' specific needs. Over the years, we have grown into a leading player in the market, with a diverse portfolio of successful projects.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="content">
                        <h3 className="py-3 text-center">Growth and Expansion</h3>
                        <p>Through continuous innovation and a commitment to understanding our clients' evolving requirements, we have achieved steady growth and expanded our presence across Tirunelveli, Tamil Nadu. Our ability to adapt to changing technologies and trends has allowed us to stay ahead of the curve</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="content">
                        <h3 className="py-3 text-center">Vision for the Future</h3>
                        <p>Looking ahead, we envision AJ INFOTECK as the go-to partner for transformative IT solutions across diverse industries. By harnessing the power of emerging technologies, we aim to lead the way in delivering solutions that drive our clients' success. Our focus on client-centricity and innovation will remain at the heart.</p>
                    </div>
                </div>
            </div>
            <div className="row mx-1 my-4">
                <div className="col-12 col-md-6">
                    <h3 className="mb-3">We Are Best</h3>
                    <p>At AJ INFOTECK, we harness our expertise and extensive experience to craft technologies that make a tangible impact on the present and shape a brighter future. Our commitment to excellence, unwavering integrity in fulfilling promises, and ever-expanding reservoir of knowledge form the bedrock of every project we undertake.</p>
                </div>
                <div className="col-12 col-md-6" id="parent">
                    <img src={circle} alt="about-circle" width="300px" height="300px" id="circle" className="m-auto d-block"/>
                    <img src={about1} alt="about-img" width="250px" height="250px" id="img"/>
                </div>
            </div>
            <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="batch">
                                <span><FaExplosion /></span>
                                <h4>Quality products</h4>
                                <small>At , our foremost commitment is to deliver secure and top-quality products that cater to all your business needs.</small>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="batch">
                                <span><FaCode /></span>
                                <h4>Innovation</h4>
                                <small>At AJ INFOTECK, we thrive on embracing innovative approaches to problem-solving, exploring diverse avenues to overcome challenges effectively.</small>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="batch">
                                <span><FaCodeMerge /></span>
                                <h4>Customer Friendly</h4>
                                <small>At AJ INFOTECK, we take immense pride in our role as a partner, helping customers meet their unique requirements and bring their ideas to life.</small>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="batch">
                                <span><FaCalendarCheck /></span>
                                <h4>Timely Delivery</h4>
                                <small>At AJ INFOTECK, we prioritize the utmost quality, accuracy, and reliability of all our deliverables, ensuring excellence at every step of our processes.</small>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default About;