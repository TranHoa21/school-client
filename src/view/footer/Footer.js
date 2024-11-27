import React from "react";
import "../../style/footer/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer row">
                <div className="col-md-5 footer-box">
                    <img className="logo-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728318311/100_gl2oqb.png" />
                    <div className="box-contact">
                        <img className="contact-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728566260/email_542689_ycsisj.png" />
                        <p className="contact-data">hello@skillbridge.com</p>
                    </div>
                    <div className="box-contact">
                        <img className="contact-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728566260/incoming-call_5465937_lnxqet.png" />
                        <p className="contact-data">+91 91813 23 2309</p>
                    </div>
                    <div className="box-contact">
                        <img className="contact-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728566260/home-address_12536976_hudvwe.png" />
                        <p className="contact-data">Somewhere in the World</p>
                    </div>
                </div>
                <div className="col-md-2 footer-box">
                    <h5 className="home-link">
                        Home
                    </h5>
                    <p className="list-body">Benefits</p>
                    <p className="list-body">Our Courses</p>
                    <p className="list-body">Our Testimonials</p>
                    <p className="list-body">Our FAQ</p>
                </div>
                <div className="col-md-2 footer-box">
                    <h5 className="home-link">
                        About Us
                    </h5>
                    <p className="list-body">Company</p>
                    <p className="list-body">Achievements</p>
                    <p className="list-body">Our Goals</p>
                </div>
                <div className="col-md-3 footer-box">
                    <h5 className="social-profiles">Social Profiles</h5>
                    <div className="social-profiles-img">
                        <NavLink to=""><img className="image-social" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728562402/facebook_5968903_djsy4o.png" /></NavLink>
                        <NavLink to=""><img className="image-social" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728562402/social-media_11124036_dnvisp.png" /></NavLink>
                        <NavLink to=""><img className="image-social" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728562402/linkedin_3992560_khf6u4.png" /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;