import React from 'react';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <section id="aboutme">
            <div className="container">
                <div className='image'>
                    <img src={`${process.env.PUBLIC_URL}/img/gems2.png`} alt="Gems" className="profile-pic" />
                </div>
                <div className="text">
                    <h1>I'm a web developer who loves to create sleek, user-friendly websites.</h1>
                    <p>When I'm not coding, you'll find me exploring the latest tech trends or playing video games. <br></br><br></br>Graduated from the University of San Jose-Recoletos and had a blast interning at Accenture, where I built cool automation solutions from scratch. <br></br><br></br> Now, I'm ready to take on the world one line of code at a time!</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;