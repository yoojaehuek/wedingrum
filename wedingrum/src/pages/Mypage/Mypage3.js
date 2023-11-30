import React, { useState } from 'react';
import './Mypage3.scss';
import MyPageTop from '../../components/MyPage/MyPageTop';

const Mypage3 = () => {
  const [selectedButton, setSelectedButton] = useState('button1');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="Mypage-container">
      <div className='my-backgrund'>
        <MyPageTop/>
      </div>
      <div className='my-backgrund2'>
        <div className={`invitation-container ${selectedButton === 'button1' ? 'style1' : selectedButton === 'button2' ? 'style2' : 'style3'}`}>
          <h1>결혼식 청첩장</h1>
          <p>이 특별한 순간에 여러분을 초대합니다.</p>
          <div className="details">
            <p className="date">날짜: 2023년 12월 1일</p>
            <p>시간: 오후 3시</p>
            <p>장소: 아름다운 웨딩홀</p>
            <p>주소: 서울시 강남구 청담동 123-456</p>
          </div>
        </div>
        <div className="buttons">
            <button onClick={() => handleButtonClick('button1')}>짱구</button>
            <button onClick={() => handleButtonClick('button2')}>손수건</button>
            <button onClick={() => handleButtonClick('button3')}>하트</button>
          </div>
      </div>
    </div>
  );
};


//1
export default Mypage3;
