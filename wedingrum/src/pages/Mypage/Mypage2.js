import React from 'react';
import '../Mypage/Mypage2.scss';
import MyPageTop from '../../components/MyPage/MyPageTop';
import MapWithRealtimeLocation from '../../components/Map/Map'
function MyPage2() {
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
                <h2>식장 이름: 잠실</h2>
                <h2>장소 :</h2>
                <h2>예약 시간 :</h2>
                <h2>룸 번호 :</h2>
                <h2>식장 전화번호 :</h2>
                <h2>주차장 안내:</h2>
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
