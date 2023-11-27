import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Mcarousel.scss";
import { use } from "passport";

export default function App() {
  
  useEffect(()=> {

  },[])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="App3">
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          {/* {holls.map(holl => <div><img src={"/img/Party/m1.jpg"}/><h3>{holl.name}</h3><p>{holl.content}</p></div>)} */}
          <div><img src="/img/Party/m2.jpg"/><h3>공덕점 6F 연회홀</h3><p>수용인원 500명·주차가능 550대</p></div>
          <div><img src="/img/Party/m3.jpg"/><h3>공덕점 7F 연회홀</h3><p>수용인원 500명·주차가능 550대</p></div>
          <div><img src="/img/Party/m4.jpg"/><h3>선릉점 연회홀</h3><p>수용인원 440명·주차가능 350대</p></div>
          <div><img src="/img/Party/m5.jpg"/><h3>광화문점 연회홀</h3><p>수용인원 550명·주차가능 400대</p></div>
          <div><img src="/img/Party/m6.jpg"/><h3>반포점 연회홀</h3><p>수용인원 500명·주차가능 250대</p></div>
          <div><img src="/img/Party/m6.jpg"/><h3>잠실점 연회홀</h3><p>수용인원 550명·주차가능 200대</p></div>
        </Carousel>
      </div>
    </div>
  );
}