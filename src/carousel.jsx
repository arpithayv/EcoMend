// Carousel.js
import React, { useState } from "react";
import "./carousel.css";
import ParentComponent from "./ParentComponent.jsx";
const Carousel = ({ images = [] }) => {
  // Add a default value for images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  console.log("Images in Carousel:", images); // Log images to debug

  return <div className="carousel-container">{/* Carousel content */}</div>;
};

export default Carousel;
