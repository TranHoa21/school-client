import React, { useState, useEffect } from "react";
import "../../style/home/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
const Home = () => {
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const { t, i18n } = useTranslation();
    const [recentPosts, setRecentPosts] = useState([]);
    const [question, setQuestion] = useState(true);
    const [question2, setQuestion2] = useState(true);
    const [question3, setQuestion3] = useState(true);
    const [question4, setQuestion4] = useState(true);
    const [question5, setQuestion5] = useState(true);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long' }; // Ví dụ: "September 2024"
        const locale = i18n.language === 'vi' ? 'vi-VN' : 'en-US'; // Choose the locale based on the language
        return date.toLocaleDateString(locale, options);
    };
    const theme = useSelector((state) => state.theme.theme);

    const handleQuestionClick = () => {
        setQuestion(!question);
    };
    const handleQuestionClick2 = () => {
        setQuestion2(!question2);
    };
    const handleQuestionClick3 = () => {
        setQuestion3(!question3);
    };
    const handleQuestionClick4 = () => {
        setQuestion4(!question4);
    };
    const handleQuestionClick5 = () => {
        setQuestion5(!question5);
    };


    const iconImgSrc = question
        ? 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728523048/plus-small_3917177_xysxly.png'
        : 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/cross-small_3917203_rplegl.png';

    const iconImgSrc2 = question2
        ? 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728523048/plus-small_3917177_xysxly.png'
        : 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/cross-small_3917203_rplegl.png';
    const iconImgSrc3 = question3
        ? 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728523048/plus-small_3917177_xysxly.png'
        : 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/cross-small_3917203_rplegl.png';
    const iconImgSrc4 = question4
        ? 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728523048/plus-small_3917177_xysxly.png'
        : 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/cross-small_3917203_rplegl.png';
    const iconImgSrc5 = question5
        ? 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728523048/plus-small_3917177_xysxly.png'
        : 'https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/cross-small_3917203_rplegl.png';



    return (
        <div className={`home-body ${theme === 'night' ? 'night-theme' : 'day-theme'}`}>
            <div className="home-start">
                <div className="home-start-box-data">
                    <div className="home-start-content"><img className="home-start-box-data-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728322083/icon1_zjkzk6.png" /><h2> <span class="highlight">Unlock</span> Your Creative Potential</h2></div>
                    <h4 className="home-start-h3">with Online Design and Development Courses.</h4>
                    <p className="home-start-p">Learn from Industry Experts and Enhance Your Skills.</p>
                    <div className="link-box">
                        <a href="" className="explore-courses">Explore Courses</a>
                        <a href="" className="view-pricing">View Pricing</a>
                    </div>
                </div>
                <div className="home-start-box-img">
                    <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728399315/zaipier_n9zxyf.png" className="home-start-img-item" />
                    <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728399315/spotify_rxrplg.png" className="home-start-img-item" />
                    <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728399315/zoom_dx26ri.png" className="home-start-img-item" />
                    <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728399315/amazon_zkhuwi.png" className="home-start-img-item" />
                    <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728399315/adobe_bmgrry.png" className="home-start-img-item" />
                    <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728399315/notion_c8n6xe.png" className="home-start-img-item" />
                    <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728399315/netfixt_emwgz5.png" className="home-start-img-item-end" />
                </div>
            </div>
            <div className="the-blog"><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728321202/How-to-Avoid-3-Common-Mistakes-When-Selling-Your-Business_img_ymd6yt.png" className="the-blog-title" />
            </div>
            <div className="benefits-container">
                <h1 className="benefits-title">Benefits</h1>
                <div className="box-benefits-content">
                    <p className="benefits-content">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <Link className="benefits-view-all" to="">View All</Link>
                </div>
                <div className="benefits row box1">
                    <div className="col-md-4 box1-item">
                        <h1 className="stt">01</h1>
                        <h5 className="item-title">Flexible Learning Schedule</h5>
                        <p className="item-describe">Fit your coursework around your existing commitments and obligations.</p>
                        <div className="item-link" ><img className="image-link" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728402452/up-right_8678590_urocrr.png" /></div>
                    </div>
                    <div className="col-md-4 box1-item">
                        <h1 className="stt">02</h1>
                        <h5 className="item-title">Expert Instruction</h5>
                        <p className="item-describe">Learn from industry experts who have hands-on experience in design and development.</p>
                        <div className="item-link" ><img className="image-link" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728402452/up-right_8678590_urocrr.png" /></div>
                    </div>
                    <div className="col-md-4 box1-item">
                        <h1 className="stt">03</h1>
                        <h5 className="item-title">Diverse Course Offerings</h5>
                        <p className="item-describe">Explore a wide range of design and development courses covering various topics.</p>
                        <div className="item-link" ><img className="image-link" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728402452/up-right_8678590_urocrr.png" /></div>
                    </div>
                </div>
                <div className="benefits row box1">
                    <div className="col-md-4 box1-item">
                        <h1 className="stt">04</h1>
                        <h5 className="item-title">Updated Curriculum</h5>
                        <p className="item-describe">Access courses with up-to-date content reflecting the latest and industry practies.</p>
                        <div className="item-link" ><img className="image-link" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728402452/up-right_8678590_urocrr.png" /></div>
                    </div>
                    <div className="col-md-4 box1-item">
                        <h1 className="stt">05</h1>
                        <h5 className="item-title">Practical Projects and Assignments</h5>
                        <p className="item-describe">Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                        <div className="item-link" ><img className="image-link" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728402452/up-right_8678590_urocrr.png" /></div>
                    </div>
                    <div className="col-md-4 box1-item">
                        <h1 className="stt">06</h1>
                        <h5 className="item-title">Interactive Learning Environment</h5>
                        <p className="item-describe">Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                        <div className="item-link" ><img className="image-link" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728402452/up-right_8678590_urocrr.png" /></div>
                    </div>
                </div>
            </div>
            <div className="our-courses-container">
                <h1 className="our-courses-title">Our Courses</h1>
                <div className="box-our-courses-content">
                    <p className="our-courses-content">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <Link className="our-courses-view-all" to="">View All</Link>
                </div>
                <div className="our-courses row box ">
                    <div className="col-md-6 box-item">
                        <img className="box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408360/side-view-man-writing-post-its_xawapw.jpg" />
                        <div className="box-item-cha">
                            <div className="item-time">
                                <div className="item-category">4 Weeks </div>
                                <div className="item-category">Beginner</div>
                            </div>
                            <div className="item-author">By John Smith</div>
                        </div>
                        <h5 className="box-item-title">Web Design Fundamentals</h5>
                        <p className="box-item-content">Learn the fundamentals of web design, including HTML, CSS and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                        <div className="get-it-now-item"><a href="">Get it Now</a></div>
                    </div>
                    <div className="col-md-6 box-item">
                        <img className="box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408411/side-view-man-sitting-desk_-nen_j5urzq.jpg" />
                        <div className="box-item-cha">
                            <div className="item-time">
                                <div className="item-category">6 Weeks </div>
                                <div className="item-category">Intermediate</div>
                            </div>
                            <div className="item-author">By Emily Johnson</div>
                        </div>
                        <h5 className="box-item-title">UI/UX Design</h5>
                        <p className="box-item-content">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (US). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                        <div className="get-it-now-item"><a href="">Get it Now</a></div>
                    </div>
                </div>
                <div className="our-courses row box ">
                    <div className="col-md-6 box-item">
                        <img className="box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408358/colorful-overloaded-bullet-journal_hrtpnv.jpg" />
                        <div className="box-item-cha">
                            <div className="item-time">
                                <div className="item-category">8 Weeks </div>
                                <div className="item-category">Intermediate</div>
                            </div>
                            <div className="item-author">By David Brown</div>
                        </div>
                        <h5 className="box-item-title">Mobile App Development</h5>
                        <p className="box-item-content">Dive into the world of mobile app development. Learn to build native IOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
                        <div className="get-it-now-item"><a href="">Get it Now</a></div>
                    </div>
                    <div className="col-md-6 box-item">
                        <img className="box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408019/flat-lay-color-palette-house-renovation-with-notebook-colored-pencils_niww9b.jpg" />
                        <div className="box-item-cha">
                            <div className="item-time">
                                <div className="item-category">10 Weeks </div>
                                <div className="item-category">Beginner</div>
                            </div>
                            <div className="item-author">By Sarah Thompson</div>
                        </div>
                        <h5 className="box-item-title">Graphic Design for Beginners</h5>
                        <p className="box-item-content">Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</p>
                        <div className="get-it-now-item"><a href="">Get it Now</a></div>
                    </div>
                </div>
                <div className="our-courses row box ">
                    <div className="col-md-6 box-item">
                        <img className="box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408006/html_le8svd.png" />
                        <div className="box-item-cha">
                            <div className="item-time">
                                <div className="item-category">10 Weeks</div>
                                <div className="item-category">Intermediate</div>
                            </div>
                            <div className="item-author">By Michael Adams</div>
                        </div>
                        <h5 className="box-item-title">Front-End Web Development</h5>
                        <p className="box-item-content">Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</p>
                        <div className="get-it-now-item"><a href="">Get it Now</a></div>
                    </div>
                    <div className="col-md-6 box-item">
                        <img className="box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408020/programming-background-with-person-working-with-codes-computer_qhuxrq.jpg" />
                        <div className="box-item-cha">
                            <div className="item-time">
                                <div className="item-category">6 Weeks</div>
                                <div className="item-category">Advance</div>
                            </div>
                            <div className="item-author">By Jennifer Wilson</div>
                        </div>
                        <h5 className="box-item-title">Advanced JavaScript</h5>
                        <p className="box-item-content">Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.</p>
                        <div className="get-it-now-item"><a href="">Get it Now</a></div>
                    </div>
                </div>
            </div>
            <div className="our-testimonials-container">
                <h1 className="our-testimonials-title">Our Testimonials</h1>
                <div className="box-our-testimonials-content">
                    <p className="our-testimonials-content">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <Link className="our-testimonials-view-all" to="">View All</Link>
                </div>
                <div className="our-testimonials row box ">
                    <div className="col-md-6 box-item testimonials">
                        <div className="box-item-testimonials">The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</div>
                        <div className="box-item-user">
                            <div className="user-name-item"><img className="user-avatar-item" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452784/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-female-office-manager-ceo-e-commerce-company-looking-pleased-camera-white-background_fzbvun.jpg" />Sarah L</div>
                            <div className="read-full"><a href="">Read Full Story</a></div>
                        </div>
                    </div>
                    <div className="col-md-6 box-item testimonials">
                        <div className="box-item-testimonials">The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!</div>
                        <div className="box-item-user">
                            <div className="user-name-item"><img className="user-avatar-item" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452788/portrait-young-man-yellow-scene_fhk3gp.jpg" />Jason M</div>
                            <div className="read-full"><a href="">Read Full Story</a></div>
                        </div>
                    </div>
                </div>
                <div className="our-testimonials row box ">
                    <div className="col-md-6 box-item testimonials">
                        <div className="box-item-testimonials">The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!</div>
                        <div className="box-item-user">
                            <div className="user-name-item"><img className="user-avatar-item" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452785/portrait-smiling-blonde-woman_gufmzp.jpg" />Emily R</div>
                            <div className="read-full"><a href="">Read Full Story</a></div>
                        </div>
                    </div>
                    <div className="col-md-6 box-item testimonials">
                        <div className="box-item-testimonials">I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!</div>
                        <div className="box-item-user">
                            <div className="user-name-item">
                                <img className="user-avatar-item" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452784/front-view-angry-model_ugk9pm.jpg" />Michael K</div>
                            <div className="read-full"><a href="">Read Full Story</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-pricing-container">
                <h1 className="our-pricing-title">Our Pricing</h1>
                <div className="box-our-pricing-content">
                    <p className="our-pricing-content">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <div className="our-pricing-view-all" >
                        <div className="monthly ">Monthly </div>
                        <div className="yearly">Yearly</div>
                    </div>

                </div>
                <div className="pricing-box row ">
                    <div className="pricing-box-item col-md-6">
                        <h4 className=" pricing-box-item-title">Free Plan</h4>
                        <h5 className="pricing-box-item-month"><span className="pricing-box-item-higlight">$0</span>/month</h5>
                        <div className="pricing-box-item-list" >
                            <h4 className="item-list-title"> Available Features</h4>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Access to selected free courses.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Limited course materials and resources.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Basic community support.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">No certification upon completion.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Ad-supported platform.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/cross-small_3917203_rplegl.png" />
                                <p className="item-list-content">Access to exclusive Pro Plan community forums.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/cross-small_3917203_rplegl.png" />
                                <p className="item-list-content">Early access to new courses and updates.</p>
                            </div>
                            <div className="get-started">Get Started</div>
                        </div>
                    </div>
                    <div className="pricing-box-item col-md-6">
                        <h4 className=" pricing-box-item-title">Pro Plan</h4>
                        <h5 className="pricing-box-item-month"><span className="pricing-box-item-higlight">$79</span>/month</h5>
                        <div className="pricing-box-item-list" >
                            <h4 className="item-list-title"> Available Features</h4>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content"> Unlimited access to all courses.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Unlimited course materials and resources.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Priority support from instructors.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Course completion certificates.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Ad-free experience.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Access to exclusive Pro Plan community forums.</p>
                            </div>
                            <div className="item-list-data">
                                <img className="item-list-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728464445/check-mark_5291043_nfev6y.png" />
                                <p className="item-list-content">Early access to new courses and updates.</p>
                            </div>
                            <div className="get-started">Get Started</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="questions-container">
                <div className="questions-box row">
                    <div className="col-md-4 questions-box-item">
                        <h2 className="questions-box-item-title">Frequently Asked Questions</h2>
                        <p className="questions-box-item-content-data">Still you have any questions? Contact our Team via support@skillbridge.com</p>
                        <div className="questions-box-item-faq"><a className="questions-box-item-faq-link" href="">See All FAQ's</a></div>
                    </div>
                    <div className="col-md-7 questions-box-item">
                        <div className={`questions-box-item-data ${!question ? 'expanded' : ''}`}>
                            <div className="questions-box-item-question">
                                <h5 className="questions-box-item-question-data">   Can I enroll in multiple courses at once?</h5>
                                <button className="btn-questions" onClick={handleQuestionClick} >
                                    <img className="questions-box-item-image" src={iconImgSrc} />
                                </button>
                            </div>
                            {!question && (<>
                                <p className="questions-box-item-content">
                                    Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.
                                </p>
                                <div className="questions-box-item-answer">
                                    <h5 className="questions-box-item-answer-data">Enrollment Process for Different Courses</h5>
                                    <img className="questions-box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/thin-arrow_12857763_fafl6y.png" />
                                </div>
                            </>
                            )}
                        </div>
                        <div className={`questions-box-item-data ${!question2 ? 'expanded' : ''}`}>
                            <div className="questions-box-item-question">
                                <h5 className="questions-box-item-question-data">   What kind of support can I expect from instructors?</h5>
                                <button className="btn-questions" onClick={handleQuestionClick2} >
                                    <img className="questions-box-item-image" src={iconImgSrc2} />
                                </button>
                            </div>
                            {!question2 && (<>
                                <p className="questions-box-item-content">
                                    You can expect prompt answers to your questions, feedback on assignments, and guidance throughout the course.                                </p>
                                <div className="questions-box-item-answer">
                                    <h5 className="questions-box-item-answer-data">Enrollment Process for Different Courses</h5>
                                    <img className="questions-box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/thin-arrow_12857763_fafl6y.png" />
                                </div>
                            </>
                            )}
                        </div>
                        <div className={`questions-box-item-data ${!question3 ? 'expanded' : ''}`}>
                            <div className="questions-box-item-question">
                                <h5 className="questions-box-item-question-data">Are the courses self-paced or do they have specific start and end dates?</h5>
                                <button className="btn-questions" onClick={handleQuestionClick3} >
                                    <img className="questions-box-item-image" src={iconImgSrc3} />
                                </button>
                            </div>
                            {!question3 && (<>
                                <p className="questions-box-item-content">
                                    All our courses are self-paced, so you can start and finish them at your own pace without any specific deadlines.
                                </p>
                                <div className="questions-box-item-answer">
                                    <h5 className="questions-box-item-answer-data">Enrollment Process for Different Courses</h5>
                                    <img className="questions-box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/thin-arrow_12857763_fafl6y.png" />
                                </div>
                            </>
                            )}
                        </div>
                        <div className={`questions-box-item-data ${!question4 ? 'expanded' : ''}`}>
                            <div className="questions-box-item-question">
                                <h5 className="questions-box-item-question-data">Are there any prerequisites for the courses?</h5>
                                <button className="btn-questions" onClick={handleQuestionClick4} >
                                    <img className="questions-box-item-image" src={iconImgSrc4} />
                                </button>
                            </div>
                            {!question4 && (<>
                                <p className="questions-box-item-content">
                                    Most courses have no prerequisites, but some advanced courses may require prior knowledge or experience in specific areas.
                                </p>
                                <div className="questions-box-item-answer">
                                    <h5 className="questions-box-item-answer-data">Enrollment Process for Different Courses</h5>
                                    <img className="questions-box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/thin-arrow_12857763_fafl6y.png" />
                                </div>
                            </>
                            )}
                        </div>
                        <div className={`questions-box-item-data ${!question5 ? 'expanded' : ''}`}>
                            <div className="questions-box-item-question">
                                <h5 className="questions-box-item-question-data">Can I download the course materials for offline access?</h5>
                                <button className="btn-questions" onClick={handleQuestionClick5} >
                                    <img className="questions-box-item-image" src={iconImgSrc5} />
                                </button>
                            </div>
                            {!question5 && (<>
                                <p className="questions-box-item-content">
                                    Yes, you can download most course materials for offline access, allowing you to study anytime, anywhere.
                                </p>
                                <div className="questions-box-item-answer">
                                    <h5 className="questions-box-item-answer-data">Enrollment Process for Different Courses</h5>
                                    <img className="questions-box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728520649/thin-arrow_12857763_fafl6y.png" />
                                </div>
                            </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;