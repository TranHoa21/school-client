import React, { useState } from "react";
import "../../style/auth/login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { loginStart, loginSuccess, loginFailure } from "../../redux/slices/authSlice"; // Import actions
import { setUser } from '../../redux/slices/userSlice';

const Login = () => {
    const testimonialsData = [
        {
            text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
            userName: "Sarah L",
            avatar: "https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452784/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-female-office-manager-ceo-e-commerce-company-looking-pleased-camera-white-background_fzbvun.jpg",
        },
        {
            text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
            userName: "Jason M",
            avatar: "https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452788/portrait-young-man-yellow-scene_fhk3gp.jpg",
        },
        {
            text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
            userName: "Emily R",
            avatar: "https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452785/portrait-smiling-blonde-woman_gufmzp.jpg",
        },
        {
            text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
            userName: "Michael K",
            avatar: "https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452784/front-view-angry-model_ugk9pm.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };
    const handleLogin = async (e) => {
        e.preventDefault(); // Ngăn chặn gửi form mặc định
        dispatch(loginStart());
        try {
            const response = await axios.post('http://localhost:3003/api/v1/auth/login', {
                email: email,
                password: password,
            });
            const userData = response.data;
            const userId = userData.user._id
            // Xử lý thành công (ví dụ: lưu token, chuyển hướng đến trang chính)
            console.log("User logged in successfully:", response.data);
            dispatch(loginSuccess(userData));
            dispatch(setUser(userData));
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userId', userId);
            localStorage.setItem('userRole', userData.role);
            localStorage.setItem('userName', userData.name);
            localStorage.setItem('userEmail', userData.email);
            alert("Đăng nhập thành công! Tự động chuyển hướng sau 2 giây");
            setTimeout(() => {
                navigate('/'); // Chuyển hướng đến trang đăng nhập sau 5 giây
            }, 2000);

        } catch (error) {
            console.error("Error during login:", error);
            alert("Đăng nhập không thành công! Có lỗi khi đăng nhập");
            dispatch(loginFailure(error.response.data));
            // Xử lý lỗi (hiển thị thông báo lỗi cho người dùng)
        }
    };

    return (
        <div className="login-body row">
            {/* Testimonials Section */}
            <div className="col-md-5 login-item order-1 order-md-2">
                <h1 className="signup-title">Login</h1>
                <p className="signup-note">Welcome back! Please log in to access your account.</p>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="" className="forgot-password">Forgot Password?</Link>
                    <label className="custom-checkbox">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-label">
                            Remember Me
                        </span>
                    </label>
                    <button type="submit" className="btn signup-button">Login</button>
                </form>
                <p className="or"></p>
                <button className="btn signup-with-google">
                    <img className="google-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1729519358/google_2504914_pe1zmv.png" alt="Google Icon" />
                    Sign Up With Google
                </button>
                <p className="already">
                    Don't have an account? <Link to="/signup" className="to-login">Sign Up</Link>
                </p>
            </div>
            <div className="col-md-7 login-item order-2 order-md-1">
                <h1 className="students-title">Students Testimonials</h1>
                <p className="students-content">
                    Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                </p>
                <div className="testimonial-slider">
                    <div className="box-item testimonials active">
                        <div className="box-item-testimonials">
                            {testimonialsData[currentIndex].text}
                        </div>
                        <div className="box-item-user">
                            <div className="user-name-item">
                                <img className="user-avatar-item" src={testimonialsData[currentIndex].avatar} alt="User Avatar" />
                                <span className="user-name">{testimonialsData[currentIndex].userName}</span>
                            </div>
                            <div className="read-full">
                                <a href="#!" className="read-full-link">Read Full Story</a>
                            </div>
                        </div>
                    </div>
                    <button className="prev" onClick={prevTestimonial}>❮</button>
                    <button className="next" onClick={nextTestimonial}>❯</button>
                </div>
            </div>

            {/* Sign-Up Form Section */}

        </div>
    );
};

export default Login;
