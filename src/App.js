import './App.css';
import NavbarCon from "./view/nav/NavBar";
import React, { useEffect } from 'react';
import Home from "./view/home/home.js";
import Footer from "./view/footer/Footer.js";
import Courses from "./view/courses/Courses.js";
import AboutUs from "./view/about/AboutUs.js"
import CoursesView from "./view/courses/CoursesView.js";
import Pricing from "./view/pricing/Pricing.js"
import { useSelector } from 'react-redux';
import Contact from "./view/contact/contact.js";
import SignUp from "./view/auth/Signup.js";
import Login from "./view/auth/Login.js";
import UserView from "./view/user/UserView.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    document.body.className = theme === 'night' ? 'night-theme' : 'day-theme';
  }, [theme]);
  return (
    <div className={`App ${theme === 'night' ? 'night' : 'day'}`}>
      <NavbarCon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:link" element={<CoursesView />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user_view/:userId" element={<UserView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

