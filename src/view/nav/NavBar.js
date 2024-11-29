import React, { useState, useEffect } from "react";
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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);




    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 540);
            // Đóng menu khi chuyển từ mobile sang desktop
            if (window.innerWidth > 540) {
                setIsMenuOpen(true); // Đảm bảo menu không mở trên màn hình lớn
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="get-it-now">
                <div className="content-get-it-now">
                    Free Courses <img className="get-img-1" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728319573/favorite_11917430_lhwfii.png" /> Sale Ends Soon, Get It Now <img className="get-img-2" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728319567/muiten_bkpvyv.png" />
                </div>
            </div>
            <div className={`nav-container ${theme === 'night' ? 'night-theme' : 'day-theme'} ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-menu">
                    {/* Logo */}
                    <NavLink className="nav-link moblie" to="/home">
                        <img className="logo-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728318311/100_gl2oqb.png" />
                    </NavLink>
                    {/* Các liên kết nav */}
                    {(isMobile ? isMenuOpen : true) && (
                        <div className="nav-mobile">
                            {isMobile && (
                                <button className="closed" onClick={handleToggleMenu}>X</button>
                            )}
                            <NavLink className={`nav-link ${pathname === '/' ? 'active' : ''}`} to="/">Home</NavLink>
                            <NavLink className={`nav-link ${pathname === '/courses' ? 'active' : ''}`} to="/courses">Courses</NavLink>
                            <NavLink className={`nav-link ${pathname === '/about' ? 'active' : ''}`} to="/about">About Us</NavLink>
                            <NavLink className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`} to="/pricing">Pricing</NavLink>
                            <NavLink className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</NavLink>
                        </div>
                    )}
                </div>
                <div className="nav-menu mobile">
                    <NavLink className={`nav-link ${pathname === '/signup' ? 'active' : ''}`} to="/signup">Sign Up</NavLink>
                    <NavLink className={`nav-link login ${pathname === '/login' ? 'active' : ''}`} to="/login">Login</NavLink>
                </div>
                {/* Nút Unlock và Explore Courses */}
                {isMobile && (
                    <div className="unlock-potential">
                        <button className="unlock-button" onClick={handleToggleMenu}><img className="btn-nav-mobile" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732883239/text_16510767_qvknvb.png" /></button>
                    </div>
                )}
            </div>

        </>
    );
};

export default NavbarCon;
