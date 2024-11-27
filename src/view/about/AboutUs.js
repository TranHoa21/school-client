import React from "react";
import "../../style/about/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {


    return (
        <div className="about-body">
            <div className="online-courses row">
                <div className="col-md-6 online-courses-box">
                    <h1 className="online-courses-box-item-title">About Skillbridge</h1>
                </div>
                <div className="col-md-6 online-courses-box">
                    <p className="online-courses-box-item-content">Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
                </div>
            </div>
            <div className="achievements-container">
                <h2 className="achievements-title">Achievements</h2>
                <p className="achievements-description">
                    Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements.
                </p>
                <div className="achievements-list row">
                    <div className="achievement-item col-md-6 col-sm-12">
                        <img className="achievement-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732655594/crown_10948058_yrnopn.png" alt="Achievement" />
                        <h5 className="achievement-name">Trusted by Thousands</h5>
                        <p className="achievement-details">We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
                    </div>
                    <div className="achievement-item col-md-6 col-sm-12">
                        <img className="achievement-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732655594/medal_12484077_mpvajg.png" alt="Achievement" />
                        <h5 className="achievement-name">Award-Winning Courses</h5>
                        <p className="achievement-details">Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
                    </div>
                    <div className="achievement-item col-md-6 col-sm-12">
                        <img className="achievement-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732655594/drama_11150067_finjbf.png" alt="Achievement" />
                        <h5 className="achievement-name">Positive Student Feedback</h5>
                        <p className="achievement-details">We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
                    </div>
                    <div className="achievement-item col-md-6 col-sm-12">
                        <img className="achievement-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732655593/flash_12110263_etmcig.png" alt="Achievement" />
                        <h5 className="achievement-name">Industry Partnerships</h5>
                        <p className="achievement-details">We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies</p>
                    </div>
                </div>
            </div>
            <div className="goals-container">
                <h4 className="goals-title">Our Goals</h4>

                <p className="goals-description">
                    At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to
                </p>

                <div className="goals-list row">
                    <div className="goal-item col-md-6 col-sm-12">
                        <img className="goal-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732656624/backpack_9374224_b0gewi.png" alt="Goal" />
                        <h5 className="goal-name">Provide Practical Skills</h5>
                        <p className="goal-details">We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.</p>
                    </div>
                    <div className="goal-item col-md-6 col-sm-12">
                        <img className="goal-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732656624/book_18238256_e1cz8r.png" alt="Goal" />
                        <h5 className="goal-name">Foster Creative Problem-Solving</h5>
                        <p className="goal-details">We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.</p>
                    </div>
                    <div className="goal-item col-md-6 col-sm-12">
                        <img className="goal-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732656624/puzzle_17128411_gnq7vc.png" alt="Goal" />
                        <h5 className="goal-name">Promote Collaboration and Community</h5>
                        <p className="goal-details">We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.</p>
                    </div>
                    <div className="goal-item col-md-6 col-sm-12">
                        <img className="goal-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1732656624/alert_12496110_kaz5wq.png" alt="Goal" />
                        <h5 className="goal-name">Stay Ahead of the Curve</h5>
                        <p className="goal-details">The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.</p>
                    </div>
                </div>
            </div>
            <div className="digital-innovation row">
                <div className="col-md-10 digital-innovation-item ">
                    <h1 className="innovation-title">
                        <span className="highlight">Together</span>, let's shape the future of digital innovation
                    </h1>
                    <p className="innovation-description">
                        Join us on this exciting learning journey and unlock your potential in design and development.
                    </p>
                </div>
                <div className="col-md-2 digital-innovation-item">
                    <button className="join-now-button">Join Now</button>
                </div>
            </div>
        </div>

    )
}

export default AboutUs;
