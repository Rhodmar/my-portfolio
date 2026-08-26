import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';  // Make sure to import the CSS for the Header component

const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

const Header = () => {
    return (
        <header id='header'>
            <nav>
                <ul>
                    <li><NavLink to="/" end className={navLinkClass}>Intro</NavLink></li>
                    <li><NavLink to="/about" className={navLinkClass}>About Me</NavLink></li>
                    <li><NavLink to="/experience" className={navLinkClass}>Experience</NavLink></li>
                    <li><NavLink to="/skills" className={navLinkClass}>Skills</NavLink></li>
                    <li><NavLink to="/works" className={navLinkClass}>Works</NavLink></li>
                    <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
