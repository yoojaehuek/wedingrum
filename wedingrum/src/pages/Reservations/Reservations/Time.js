import './Date.scss';
import LeftDate from './leftDate';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Month.scss';
import { useRecoilState } from "recoil";
import { timeState } from "../../../recoil/atoms/loginState";


const Date3 = () => {
  const [selectedTime, setSelectedTime] = useRecoilState(timeState); //useState와 거의 비슷한 사용법

  useEffect(() => {
    // 시간이 변경될 때 LeftDate에 전달
    // 예시: updateLeftDate(selectedTime);
  }, [selectedTime]);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <div className='Date-container'>
        <div className='Date-content'>
          <div className='Date-warp'>
            <div className='Date-warp2'>
              <div className='Date-tit'>
                <LeftDate selectedTime={selectedTime} />
              </div>
              <div className='Date-tit2'>
                <div className='Date-tit3'>
                  <h3>원하시는 시간을 선택해주세요.</h3>
                </div>
                <ul>
                  <div className="day-of-week-selector-container">
                    <div className="days-of-week">
                      {['11시대', '12시~1시', '2시', '3시~4시', '5시', '6시이후'].map((time) => (
                        <div
                          key={time}
                          className={`day ${selectedTime === time ? 'selected' : ''}`}
                          onClick={() => handleTimeClick(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </ul>
              </div>
                <div className="next-arrow-container">
                  <NavLink to="/contactChoice" className="next-arrow">
                    <p>→</p>
                  </NavLink>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Date3;
