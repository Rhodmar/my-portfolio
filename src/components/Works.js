import React from 'react';
import Carousel from './Carousel';  // Import the Carousel component
import './Works.css';

const Works = () => {
    const graphicVerse = [
        '/img/gv01.jpg',
        '/img/gv02.jpg',
        '/img/gv03.jpg',
        '/img/gv04.jpg',
        '/img/gv05.jpg',
    ];
    const shareEats = [
        '/img/se01.png',
        '/img/se02.png',
        '/img/se03.png',
        '/img/se04.png',
        '/img/se05.png',
        '/img/se06.png',
    ];
    const cineApp = [
        '/img/ca01.png',
        '/img/ca02.png',
        '/img/ca03.png',
        '/img/ca04.png',
        '/img/ca05.png',
        '/img/ca06.png',
    ];

    return (
        <section id="works">
            <div className="content">
                <div className='text'>
                    <h1>My Previous Projects</h1>
                </div>
                <div className='projects'>
                        <div className='project'>
                            <div className='carousel'>
                                <Carousel images={graphicVerse} />
                            </div>
                            <div className='project-info'>
                                <h2>Graphic Verse</h2>
                                <p>Graphic Verse is a platform for multimedia students where they can showcase their artworks and assets made.</p>
                                <div className="tags">
                                    <span className="tag">PHP</span>
                                    <span className="tag">Laravel</span>
                                    <span className="tag">MySQL</span>
                                </div>
                            </div>
                        </div>
                        <div className='project'>
                            <div className='carousel'>
                                <Carousel images={shareEats} />
                            </div>
                            <div className='project-info'>
                                <h2>Share Eats</h2>
                                <p>Share Eats was a project we had for an event in school where we must create an application overnight.</p>
                                <div className="tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Javascript</span>
                                    <span className="tag">MySQL</span>
                                </div>
                            </div>
                        </div>    
                        <div className='project'>
                            <div className='carousel'>
                                <Carousel images={cineApp} />
                            </div>
                            <div className='project-info'>
                                <h2>Cine App</h2>
                                <p>Cine app was a school project. Here we implemented a wishlist, basket and check-out features.</p>
                                <div className="tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Javascript</span>
                                    <span className="tag">MySQL</span>
                                </div>
                            </div>
                        </div>    
                </div>
            </div>
        </section>
    );
};

export default Works;
