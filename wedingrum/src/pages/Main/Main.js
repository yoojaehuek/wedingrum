import "../Main/Main.scss";
import { useEffect, useRef, useState } from 'react';
import MapWithRealtimeLocation from '../../components/Map/Map'
import AutoImageSlider from '../../components/Slider/Slider';
import ImageGallery from '../../components/Main4/imghover';
import ScrollToTopButton from '../../components/TopButton/TopButton'

const Main = () => {
  const sliderRef = useRef(null);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current(); // AutoImageSlider 컴포넌트의 nextSlide 함수 호출
    }
  };

  const handleScroll = () => {
    if (!scrollTriggered && window.scrollY > window.innerHeight) {
      setScrollTriggered(true);
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTriggered]);

  return (
    <>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="../MAIN.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="main-page2">
        <div className="main-content2">
          <h1>웨딩홀 예약하기</h1>
          <a href="/"><li>Search</li></a>
        </div>
      </div>
      <div className="main-page3">
        <ScrollToTopButton/>
        <section className="main-content3">
          <AutoImageSlider onNextSlide={(nextSlide) => { sliderRef.current = nextSlide; }} />
        </section>
        <section className="main-side-bar">
          <div className="main-side-txt">
            <h1>Wedding Gallery</h1>
            <h2>A Perfect Wedding<br></br>Day for You</h2>
            <h4>완벽한 예식의 주인공, 바로 당신입니다.</h4>
            <ul>
              <li><a href='/'>잠실점</a></li>
              <li><a href='/'>반포점</a></li>
              <li><a href='/'>평택점</a></li>
              <li><a href='/'>선릉점</a></li>
              <li><a href='/'>공덕점</a></li>
            </ul>
            <MapWithRealtimeLocation/>
          </div>
        </section>
      </div>
      <div className="main-page4">
        <section className="main-content4">
          <ImageGallery/>
        </section>
      </div>
    </>
  );
};

export default Main;