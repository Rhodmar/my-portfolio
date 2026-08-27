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
                    <h1>I'm a developer who loves building sleek, user-friendly experiences, and lately, sleek video edits too.</h1>
                    <p>These days, I'm a Project and Flow Manager at Chadwick Digital, where I design automations, manage CRM systems, and run content across social platforms.</p>
                    <p>Before that, I graduated from the University of San Jose-Recoletos and interned at Accenture, building automation solutions from scratch.</p>
                    <p>I'm also branching into video editing, so if you need someone who can code it, manage it, and edit it, let's talk. When I'm not doing any of that, you'll find me exploring the latest tech or playing video games.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;