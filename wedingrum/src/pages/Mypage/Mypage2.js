import React from 'react';
import '../Mypage/Mypage.scss';
import LeftBar from '../../components/MyPage/LeftBar'
import MyPageTop from '../../components/MyPage/MyPageTop'

function MyPage2() {

  return (
    <div className="Mypage-container">
      <div className='my-backgrund'>
        <MyPageTop/>
      </div>
        <div className='sub-menu'>
          <div className='my-both'>
            <div className='left-list'>
            </div>
            <div className='my-content'>
              <h1>예약 정보</h1>
              <div className='my-content-main'>
                <h2>식장 이름:</h2>
                <h2>장소 :</h2>
                <h2>예약 시간 :</h2>
                <h2>룸 번호 :</h2>
                <h2>식장 전화번호 :</h2>
                <h2>주차장 안내:</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MyPage2;