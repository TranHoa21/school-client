import React, { useState } from "react";
import "../../style/pricing/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const Pricing = () => {
    const [question, setQuestion] = useState(true);
    const [question2, setQuestion2] = useState(true);
    const [question3, setQuestion3] = useState(true);
    const [question4, setQuestion4] = useState(true);
    const [question5, setQuestion5] = useState(true);
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
        <div className="pricing-body">
            <div className="online-courses row">
                <div className="col-md-6 online-courses-box">
                    <h1 className="online-courses-box-item-title">Our Pricings
                    </h1>
                </div>
                <div className="col-md-6 online-courses-box">
                    <p className="online-courses-box-item-content">Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
                </div>
            </div>
            <div className="our-pricing-container">


                <div className="box-our-pricing-content">
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

export default Pricing;
