import React, { useState } from 'react';
import '../SangDam.scss';
import { NavLink } from 'react-router-dom';

const SangDam3 = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleToggle = (branch) => {
    setSelectedBranch(selectedBranch === branch ? null : branch);
  };

  return (
    <div>
      <div className='Sangbody-container'>
        <div className='Sasv-container'>
          <div className='Sacontatent-warp'>
            <div className='saris-tit'>
              <h2>지점 선택</h2>
              <h3>유선 상담을 원하시는 지점을 선택해주세요.</h3>
            </div>
            <div className='saris-tit2'>
              <ul>
                <li>
                  <NavLink to="" onClick={() => handleToggle('잠실점')}>
                    <p>WDR 잠실점</p>
                    <span className='icon21'></span>
                  </NavLink>
                  {selectedBranch === '잠실점' && (
                    <div className='phone-number'>전화번호: 010-1234-5678</div>
                  )}
                </li>
                <li>
                  <NavLink to="" onClick={() => handleToggle('반포점')}>
                    <p>WDR 반포점</p>
                    <span className='icon22'></span>
                  </NavLink>
                  {selectedBranch === '반포점' && (
                    <div className='phone-number'>전화번호: 010-5312-3242</div>
                  )}
                </li>
                <li>
                  <NavLink to="" onClick={() => handleToggle('평택점')}>
                    <p>WDR 평택점</p>
                    <span className='icon23'></span>
                  </NavLink>
                  {selectedBranch === '평택점' && (
                    <div className='phone-number'>전화번호: 010-1124-4353</div>
                  )}
                </li>
                <li>
                  <NavLink to="" onClick={() => handleToggle('선릉점')}>
                    <p>WDR 선릉점</p>
                    <span className='icon23'></span>
                  </NavLink>
                  {selectedBranch === '선릉점' && (
                    <div className='phone-number'>전화번호: 010-4334-6758</div>
                  )}
                </li>
                <li>
                  <NavLink to="" onClick={() => handleToggle('공덕점')}>
                    <p>WDR 공덕점</p>
                    <span className='icon23'></span>
                  </NavLink>
                  {selectedBranch === '공덕점' && (
                    <div className='phone-number'>전화번호: 010-7364-59788</div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SangDam3;
