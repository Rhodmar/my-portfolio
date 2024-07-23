import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="text">
                    <h1>Let's Make Magic Happen.</h1>
                    <p>Feel free to reach out using the form below or contact me directly. I'm always open to discussing new projects, ideas, or opportunities!</p>
                </div>
                <div className="form">
                    <form action="https://formspree.io/f/xkgwoblv" method="POST">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
