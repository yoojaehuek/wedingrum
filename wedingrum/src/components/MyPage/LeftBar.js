import React from "react";
import { NavLink } from 'react-router-dom';

function LeftBar ({ onMenuClick }){
  return (
    <div className="left-bar">
      <ul>
        <li onClick={() => onMenuClick('내 정보')}>내 정보</li>
        <li onClick={() => onMenuClick('내정보 수정')}>내정보 수정</li>
        <li onClick={() => onMenuClick('결제 내역')}>결제 내역</li>
        <li onClick={() => onMenuClick('내가 찜한 상품')}>내가 찜한 상품</li>
        <li onClick={() => onMenuClick('상담 예약 내역')}>상담 예약 내역</li>
      </ul>
    </div>
  );
}

export default LeftBar;
