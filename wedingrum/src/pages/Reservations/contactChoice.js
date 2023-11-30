import './Reservations/Date.scss';
import LeftDate from './Reservations/leftDate';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Reservations/Month.scss';
import { useRecoilState } from "recoil";
import { contactChoiceState } from "../../recoil/atoms/loginState";


const Date3 = () => {
  const [selectedcontactChoice, setSelectedcontactChoice] = useRecoilState(contactChoiceState); //useState와 거의 비슷한 사용법
  const handleTimeClick = (contactChoice) => {
    setSelectedcontactChoice(contactChoice);
  };

  return (
    <div>
      <div className='Date-container'>
        <div className='Date-content'>
          <div className='Date-warp'>
            <div className='Date-warp2'>
              <div className='Date-tit'>
                <LeftDate selectedTime={selectedcontactChoice} />
              </div>
              <div className='Date-tit2'>
                <div className='Date-tit3'>
                  <h3>원하시는 연락 방법을 선택해주세요.</h3>
                </div>
                <ul>
                  <div className="day-of-week-selector-container">
                    <div className="days-of-week">
                      {['카카오톡', '이메일', '전화', '우편'].map((contactChoice) => (
                        <div
                          key={contactChoice}
                          className={`day ${selectedcontactChoice === contactChoice ? 'selected' : ''}`}
                          onClick={() => handleTimeClick(contactChoice)}
                        >
                          {contactChoice}
                        </div>
                      ))}
                    </div>
                  </div>
                </ul>
              </div>
              <div className="next-arrow-container">
                <NavLink to="/Theme" className="next-arrow">
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
