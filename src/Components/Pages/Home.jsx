import React, { useState, useEffect } from 'react';
import '../Css/Home.css';
import { watch_home } from '../../Assets/home';
import ProductShowcase from './ProductShowcase';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % watch_home.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + watch_home.length) % watch_home.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <>
    <div className="promo-banner">
      <div className="promo-text">
        <h1 className="promo-title">Starts Early</h1>
        <h2 className="promo-event">11.11 Promo Event</h2>
        <p className="promo-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>
      
      <div className="promo-slider">
        <button onClick={prevSlide} className="slider-button slider-button-left">‹</button>
        
        <div className="promo-image">
          <img 
            src={watch_home[currentSlide].image} 
            alt={watch_home[currentSlide].name} 
            className="watch-image" 
          />
          <p className="image-caption">{watch_home[currentSlide].name}</p>
          <p className="image-description">{watch_home[currentSlide].description}</p>
        </div>
        
        <button onClick={nextSlide} className="slider-button slider-button-right">›</button>
      </div>

    </div>

    <div>
    <ProductShowcase />
    </div>
    </>
  );
};

export default Home;
