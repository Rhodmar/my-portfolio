import React from 'react';
import './Header.css';  // Make sure to import the CSS for the Header component

const Header = () => {
    return (
        <header id='header'>
            <nav>
                <ul>
                    <li><a href="/">Intro</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/works">Works</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
