import React from "react";
import logo from './assets/logo.png';
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={logo} alt="logo" className="navbar-brand"/>
                <FaBars className="navbar-toggler hamburger" data-bs-toggle="collapse" data-bs-target="#MyNavbar"/>  
            </div>
            <div className="collapse navbar-collapse" id="MyNavbar">
                <ul className="navbar-nav" >
                    <Link to={'/'}><li className="nav-item">HOME</li></Link>
                    <Link to={'/About'}><li className="nav-item">ABOUT</li></Link>
                    <Link to={'/Dm'}><li className="nav-item">DIGITAL MARKETING</li></Link>
                    <Link to={'/Ads'}><li className="nav-item">AD'S MAKING</li></Link>
                    <Link to={'/Bpo'}><li className="nav-item">BPO</li></Link>
                    <Link to={'/Contact'}><li className="nav-item">CONTACT US</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;