import React, { useState, useEffect } from "react";
import "../../style/courses/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { NavLink } from 'react-router-dom';  // Import NavLink

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Gọi API để lấy dữ liệu khóa học
        axios.get("http://localhost:3003/api/v1/courses")
            .then(response => {
                setCourses(response.data.Coursess);// Lưu dữ liệu vào state
            })
            .catch(error => {
                console.error("There was an error fetching the courses!", error);
            });
    }, []);

    return (
        <div className="courses-body">
            <div className="online-courses row">
                <div className="col-md-6 online-courses-box">
                    <h1 className="online-courses-box-item-title">Online Courses on Design and Development</h1>
                </div>
                <div className="col-md-6 online-courses-box">
                    <p className="online-courses-box-item-content">Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
                </div>
            </div>


            {courses && courses.length > 0 ? (
                courses.map((course, index) => (
                    <div key={index} className="web-design">
                        <h5 className="web-design-title">{course.title}</h5>
                        <div className="box-web-design">
                            <p className="web-design-content">{course.description}</p>

                            {/* Thay button bằng NavLink */}
                            <NavLink className="btn-web-design" to={`/courses/${course.link}`}>
                                View Course
                            </NavLink>
                        </div>
                        <div className="web-design-box-img row">
                            <div className="col-md-4 box-img-item">
                                <img className="item-box-img-design" src={course.image} alt={`Course ${course.title} image 1`} />
                            </div>
                            <div className="col-md-4 box-img-item">
                                <img className="item-box-img-design" src={course.image_2} alt={`Course ${course.title} image 2`} />
                            </div>
                            <div className="col-md-4 box-img-item">
                                <img className="item-box-img-design" src={course.image_3} alt={`Course ${course.title} image 3`} />
                            </div>
                        </div>

                        <div className="box-information">
                            <div className="box-information-data">
                                <p className="time">{course.time}</p>
                                <p className="time">{course.tag}</p>
                            </div>
                            <h5 className="author">{course.author}</h5>
                        </div>

                        <div className="curriculum">
                            <h5 className="curriculum-title">Curriculum</h5>
                            <div className="curriculum-box row">
                                {course.day_title.map((day, idx) => (
                                    <div key={idx} className="col-md-2 curriculum-box-item-md-2">
                                        <h3 className="curriculum-box-item-md-2-day">{idx + 1}</h3>
                                        <p className="curriculum-box-item-md-2-data">{day}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading courses...</p>
            )}
        </div>

    )
}

export default Courses;
