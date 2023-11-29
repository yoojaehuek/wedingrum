import React, { useEffect, useState } from 'react';
import '../Mypage/Mypage2.scss';
import MyPageTop from '../../components/MyPage/MyPageTop';
import MapWithRealtimeLocation from '../../components/Map/Map'
import axios from 'axios';
import { API_URL } from '../../config/contansts';

function MyPage2() {
  const [reservation, setReservation] = useState({});
  const [reservationPlanner, setReservationPlanner] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/reservation`)
    .then(res => {
      console.log("MyPage2/res: ",res.data.Planner.name);
      setReservation(res.data);
      setReservationPlanner([res.data.Planner.name, res.data.Planner.phone]);
      // console.log(reservation);A
    }).catch(e => {
      console.log("MyPage2/e: ",e);
    })
  }, []);
  
  return (
    <div className="Mypage-container">
      <div className='my-backgrund'>
        <MyPageTop/>
      </div>
      <div className='sub2-menu'>
        <div className='my2-both'>
          <div className='my2-content'>
            <h1>예약 정보</h1>
            <div className='my3-content'>
              <div className='my2-content-main'>
                {console.log("reservation: ",reservation)}
                <h2>상담사: {reservationPlanner[0]}</h2>
                <h2>상담사 연락처: {reservationPlanner[1]}</h2>
                <h2>장소 : {reservation.point}</h2>
                <h2>방문일 : {reservation.date}</h2>
                <h2>희망 시간대 : {reservation.time}</h2>
                <h2>선호하는 연락 방법 : {reservation.contactChoice}</h2>
                <h2>방문 인원 : {reservation.theme}</h2>
              </div>
              <div className='my2-map'>
                  <MapWithRealtimeLocation />
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage2;
