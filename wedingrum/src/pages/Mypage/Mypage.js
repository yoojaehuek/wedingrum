import React, { useState } from 'react';
import '../Mypage/Mypage.scss';
import LeftBar from '../../components/MyPage/LeftBar';
import MyPageTop from '../../components/MyPage/MyPageTop';

function MyPage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('내 정보');

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="Mypage-container">
      <div className='my-backgrund'>
        <MyPageTop/>
      </div>
      <div className='sub-menu'>
        <div className='my-both'>
          <div className='left-list'>
            <LeftBar onMenuClick={handleMenuClick} />
          </div>
          <div className='my-content'>
            <h1>{selectedMenuItem}</h1>
            <div className='my-content-main'>
              {selectedMenuItem === '내 정보' && (
                <>
                  <h2>이름 :</h2>
                  <h2>나이 :</h2>
                  <h2>전화번호 :</h2>
                  <h2>생일 :</h2>
                </>
              )}
              {selectedMenuItem === '내정보 수정' && (
                <>
                  <h2>이름 :</h2>
                  <h2>나이 :</h2>
                  <h2>전화번호 :</h2>
                  <h2>생일 :</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
