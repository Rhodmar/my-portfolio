import React, { useState, useEffect } from 'react';
import './Carousel.css';  // Include your CSS for styling

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);  // Change slide every 3 seconds
        return () => clearInterval(interval);  // Cleanup interval on component unmount
    });  // Empty dependency array to run only once

    return (
        <div className="carousel">
            <button className="carousel-control prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control next" onClick={nextSlide}>
                &#10095;
            </button>
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
