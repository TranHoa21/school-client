import React, { useState } from "react";
import "../../style/nav/style.scss";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../features/language/languageSlice';
import { setTheme } from '../../features/theme/themeSlice';

const NavbarCon = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const { i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Lấy trạng thái ngôn ngữ từ Redux
    const language = useSelector((state) => state.language.language);
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const currentLanguage = language === 'vi' ? 'Tiếng Việt' : 'English';
    const isDay = theme === 'day';
    const handleNightStyle = () => {
        dispatch(setTheme('night'));
        localStorage.setItem('theme', 'night');
    };

    const handleDayStyle = () => {
        dispatch(setTheme('day'));
        localStorage.setItem('theme', 'day');
    };

    const handleLanguageChange = (lang) => {
        // Thay đổi ngôn ngữ bằng i18n
        i18n.changeLanguage(lang);

        // Cập nhật trạng thái ngôn ngữ trong Redux và localStorage
        dispatch(setLanguage(lang));
    };
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    return (
        <>
            <div className="get-it-now">
                <div className="content-get-it-now">
                    Free Courses <img className="get-img-1" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728319573/favorite_11917430_lhwfii.png" /> Sale Ends Soon, Get It Now <img className="get-img-2" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728319567/muiten_bkpvyv.png" />
                </div>
            </div>
            <div className={`nav-container ${theme === 'night' ? 'night-theme' : 'day-theme'} ${isMenuOpen ? 'active' : ''}`}>

                <div className="nav-menu">
                    <NavLink className="nav-link" to="/home"> <img className="logo-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728318311/100_gl2oqb.png" /> </NavLink>

                    <NavLink className={`nav-link  ${pathname === '/' ? 'active' : ''}`} to="/">Home</NavLink>
                    <NavLink className={`nav-link  ${pathname === '/courses' ? 'active' : ''}`} to="/courses">Courses</NavLink>
                    <NavLink className={`nav-link  ${pathname === '/about' ? 'active' : ''}`} to="/about">About Us</NavLink>
                    <NavLink className={`nav-link  ${pathname === '/pricing' ? 'active' : ''}`} to="/pricing">Pricing</NavLink>
                    <NavLink className={`nav-link  ${pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</NavLink>
                </div>


                <div className="nav-menu">
                    <NavLink className={`nav-link  ${pathname === '/signup' ? 'active' : ''}`} to="/signup">Sign Up</NavLink>
                    <NavLink className={`nav-link login  ${pathname === '/login' ? 'active' : ''}`} to="/login">Login</NavLink>
                </div>

            </div>

        </>
    );
};

export default NavbarCon;
