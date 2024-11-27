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
        <div className="signup-body">

        </div>

    )
}

export default Courses;
