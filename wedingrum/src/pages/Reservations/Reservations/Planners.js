// Date4 컴포넌트
import React, { useState } from 'react';
import LeftDate from './leftDate';
import { useRecoilState } from "recoil";
import { monthState } from "../../../recoil/atoms/loginState";

const Date4 = () => {
  const [selectedDay, setSelectedDay] = useRecoilState(monthState); //useState와 거의 비슷한 사용법

  const planners =[
    {profileImgUrl: "/img/main4/4.png", name:"김준녕", phone:"000-0000-0000", introduction:"안녕하세요 상담 경력 5년차입니다 성싱하게 모실게요"},
    {profileImgUrl: "/img/main4/4.png", name:"김준녕", phone:"000-0000-0000", introduction:"안녕하세요 상담 경력 12년차입니다 정중하게 모실게요"},
    {profileImgUrl: "/img/main4/4.png", name:"김준녕", phone:"000-0000-0000", introduction:"안녕하세요 상담 경력 51년차입니다 내 가족처럼 모실게요"}
  ]

  return (
    <div>
      <div className='Date-container'>
        <div className='Date-content'>
          <div className='Date-warp'>
            <div className='Date-warp2'>
              <div className='Date-tit'>
                <LeftDate selectedDay={selectedDay} />
              </div>
              <div className='Date-tit2'>
                <div className='Date-tit3'>
                  <h3>원하시는 상담사를 선택해주세요.</h3>
                </div>
                <ul>
                  <div className="day-of-week-selector-container22">
                    {planners.map(planner => (
                      <div className="days-of-week">
                          <img src={`${planner.profileImgUrl}`} alt={'사진'} />
                            <div className='proname'>
                              <h1><span>{planner.name}</span></h1>
                              <h2><span>{planner.phone}</span></h2>
                              <div className='introduction'>
                                <h3>{planner.introduction}</h3>
                              </div>
                            </div>
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date4;
