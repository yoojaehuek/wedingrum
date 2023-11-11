import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const Slider = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    dots: false,
  };

  return (
    <div className="sliders">
      <Sliders {...settings} className="sliders2">
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="img/main/1.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="img/main/2.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="img/main/3.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="img/main/4.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="img/main/5.jpg"
          />
        </div>
      </Sliders>
      <div className="slide-control">
        <button className="prev" onClick={() => this.slider.slickPrev()}>
          Prev
        </button>
        <button className="next" onClick={() => this.slider.slickNext()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;