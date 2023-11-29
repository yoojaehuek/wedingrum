import './Date.scss';
import LeftDate from './leftDate';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { themeState } from "../../../recoil/atoms/loginState";


const Date6 = () => {
  const [selectedTheme, setSelectedtheme] = useRecoilState(themeState); //useState와 거의 비슷한 사용법

  useEffect(() => {
    // 시간이 변경될 때 LeftDate에 전달
    // 예시: updateLeftDate(selectedTime);
  }, [selectedTheme]);

  const handleTimeClick = (theme) => {
    setSelectedtheme(theme);
  };

  return (
    <div>
      <div className='Date-container'>
        <div className='Date-content'>
          <div className='Date-warp'>
            <div className='Date-warp2'>
              <div className='Date-tit'>
                <LeftDate selectedTime={selectedTheme} />
              </div>
              <div className='Date-tit2'>
                <div className='Date-tit3'>
                  <h3>방문 인원을 선택해주세요.</h3>
                </div>
                <ul>
                  <div className="day-of-week-selector-container">
                  <div className="days-of-week">
                      {['1명', '2~3명', '4명~5명', '6명이상'].map((theme) => (
                        <div
                          key={theme}
                          className={`day ${selectedTheme === theme ? 'selected' : ''}`}
                          onClick={() => handleTimeClick(theme)}
                        >
                          {theme}
                        </div>
                      ))}
                    </div>
                  </div>
                </ul>
              </div>
              <div className="next-arrow-container">
                <NavLink to="/Planners" className="next-arrow">
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
//1
export default Date6;
