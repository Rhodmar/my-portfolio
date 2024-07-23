import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // Use icons from react-icons library

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} Gems. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <a href="https://github.com/Rhodmar" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rhodmar-gems-rabaca-08b71b204/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/GemsRabax" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/gemsilog_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
