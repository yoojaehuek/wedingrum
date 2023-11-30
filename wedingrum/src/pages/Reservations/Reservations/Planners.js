// Date4 컴포넌트
import React, { useEffect, useState } from 'react';
import LeftDate from './leftDate';
import { useRecoilState } from "recoil";
import { startDateState, timeState, plannerState, pointState, contactChoiceState, themeState, plannerIdState } from "../../../recoil/atoms/loginState";
import axios from 'axios';
import { API_URL } from '../../../config/contansts';

const Date4 = () => {
  const [planner, setPlanner] = useRecoilState(plannerState); //useState와 거의 비슷한 사용법
  const [plannerId, setPlannerId] = useRecoilState(plannerIdState); //useState와 거의 비슷한 사용법
  const [point, setpoint] = useRecoilState(pointState); //useState와 거의 비슷한 사용법
  const [date, setDate] = useRecoilState(startDateState); //useState와 거의 비슷한 사용법
  const [time, setTime] = useRecoilState(timeState); //useState와 거의 비슷한 사용법
  const [contactChoice, setContactChoice] = useRecoilState(contactChoiceState); //useState와 거의 비슷한 사용법
  const [theme, setTheme] = useRecoilState(themeState); //useState와 거의 비슷한 사용법
  const [planners, setPlanners] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/planner?point=${point}`)
      .then(res => {
        setPlanners(res.data)
        console.log(res.data);
      }).catch(e => {
        console.log("Planners.js/e: ",e);
      })
  },[])

  const handleReservationClick = () => {
    axios.post(`${API_URL}/reservation`, {plannerId, point, date, time, contactChoice, theme})
      .then(res => {
        console.log(res);
        alert("예약 성공");
      }).catch(e => {
        console.log("Planners.js/handleReservationClick()/e: ",e);
      })
  }

  const handlePlannerChange = (e) => {
    console.log(e.target.dataset.id);
    setPlanner(e.target.dataset.name);
    setPlannerId(e.target.dataset.id);
    // setPlanner({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
  };

  // const planners =[
  //   {profileImgUrl: "/img/main4/4.png", name:"김준녕", phone:"000-0000-0000", introduction:"안녕하세요 상담 경력 5년차입니다 성싱하게 모실게요"},
  //   {profileImgUrl: "/img/main4/4.png", name:"김준녕", phone:"000-0000-0000", introduction:"안녕하세요 상담 경력 12년차입니다 정중하게 모실게요"},
  //   {profileImgUrl: "/img/main4/4.png", name:"김준녕", phone:"000-0000-0000", introduction:"안녕하세요 상담 경력 51년차입니다 내 가족처럼 모실게요"}
  // ]

  return (
    <div>
      <div className='Date-container'>
        <div className='Date-content'>
          <div className='Date-warp'>
            <div className='Date-warp2'>
              <div className='Date-tit'>
                <LeftDate />
              </div>
              <div className='Date-tit2'>
                <div className='Date-tit3'>
                  <h3>원하시는 상담사를 선택해주세요.</h3>
                </div>
                <ul>
                  <div className="day-of-week-selector-container22">
                    {planners.map(planner => (
                      <div key={planner.name} className="days-of-week">
                          <img src={`${planner.profileImgUrl}`} alt={'사진'} />
                          <div className='proname'>
                            <h1><span>{planner.name}</span></h1>
                            <h2><span>{planner.phone}</span></h2>
                            <div className='introduction'>
                              <h3>{planner.introduction}</h3>
                            </div>
                            <button data-id={planner.id} data-name={planner.name} onClick={handlePlannerChange}>확인</button>
                          </div>
                      </div>
                    ))}
                  </div>
                </ul>
                <button onClick={handleReservationClick}>예약 확정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date4;
