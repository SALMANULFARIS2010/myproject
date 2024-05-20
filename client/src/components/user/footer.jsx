import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer  text-light py-4 " style={{backgroundColor:"white"}} >
            <div className="container">
                <div className="row" style={{color:'black'}} >
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" >
                        <h5>About Us</h5>
                        <p> These companies are often founded by entrepreneurs or small groups of individuals with innovative ideas for software, hardware, or IT services.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5>Links</h5>
                        <ul className="list-unstyled" style={{ color: "black"}}>
                            <li><a href="/">Need Help</a></li>
                            {/* <li><a href="/about">About Us</a></li> */}            
                            <li><a href="/faq">FAQs</a></li>
                            <li><a href="#"><IoLogoFacebook /></a>
                            <a href="#"><IoLogoTwitter /></a>
                            <a href="#"><FaInstagramSquare /></a>   
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h5>Contact Information</h5>
                        <p>
                            Address: 1234 College Street, City, State, Zip Code <br />
                            Phone: +1 (123) 456-7890 <br />
                            Email: info@example.com
                        </p>
                    </div>
                </div>
                <div className="row" style={{color:'black'}}>
                    <div className="col-lg-12 text-center">
                        <p className="small">&copy; 2024 CODECRAFT. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;