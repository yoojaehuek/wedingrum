import React, { useState, useEffect, useRef } from 'react';
import '../Slider/Slider.scss';

const images = [
  '../img/main/1.jpg',
  '../img/main/2.jpg',
  '../img/main/3.jpg',
  '../img/main/4.jpg',
  // 추가 이미지를 필요에 따라 계속해서 추가하세요
];

const AutoImageSlider = ({ onNextSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    onNextSlide(nextSlide);
  }, [onNextSlide]);

  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: 'transform 3s ease', // 0.5초 동안 ease 함수를 사용한 부드러운 애니메이션 효과
  };

  return (
    <div className="slider-container">
      <div ref={sliderRef} className="slider" style={slideStyle}>
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
    </div>
  );
};

export default AutoImageSlider;
