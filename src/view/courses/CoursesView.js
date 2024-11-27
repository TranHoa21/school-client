import React, { useState, useEffect } from "react";
import "../../style/courses/coursesView.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useParams } from 'react-router-dom';

const CoursesView = () => {
    const [courses, setCourses] = useState({});
    const { link } = useParams();
    const [coursesData, setCoursesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesResponse = await axios.get(`http://localhost:3003/api/v1/courses/${link}`);
                setCourses(coursesResponse.data);

                const coursesDataResponse = await axios.get(`http://localhost:3003/api/v1/coursesData/${link}`);
                setCoursesData(coursesDataResponse.data);
            } catch (error) {
                console.error("There was an error fetching the data!", error);
            }
        };

        fetchData();
    }, [link]);

    // Tạo một đối tượng để nhóm dữ liệu theo ngày
    const groupedData = coursesData ? coursesData.reduce((acc, course) => {
        if (!acc[course.day]) {
            acc[course.day] = [];
        }
        acc[course.day].push(course);
        return acc;
    }, {}) : {};

    return (
        <div className="courses-view-container">
            <div className="view-courses row">
                <div className="col-md-6 view-courses-box">
                    <h1 className="view-courses-box-item-title">{courses.title}</h1>
                </div>
                <div className="col-md-6 view-courses-box">
                    <p className="view-courses-box-item-content">{courses.content}</p>
                </div>
            </div>
            <div className="view-courses-img-box">
                <img className="view-courses-image" src={courses.image} alt="Course" />
            </div>
            <div className="view-courses-data row">
                {Object.keys(groupedData).map(day => (
                    <div key={day} className="col-md-6 view-courses-data-box">
                        <h1 className="view-courses-data-item-title">{day}</h1>
                        <h5 className="view-courses-data-item-day-title">{groupedData[day][0].title_day}</h5>
                        {groupedData[day].map(course => (
                            <div key={course._id} className="box-content-lesson">
                                <div className="box-content-lesson-data">
                                    <h6 className="box-content-lesson-data-title">{course.lesson_title}</h6>
                                    <p className="box-content-lesson-data-stt">{course.lesson_stt}</p>
                                </div>
                                <div className="box-content-lesson-data-end">
                                    <img
                                        className="box-content-lesson-data-clock"
                                        src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728841364/wall-clock_7852534_dhax8t.png"
                                        alt="Clock"
                                    />
                                    <p className="box-content-lesson-data-time">{course.lesson_time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoursesView;