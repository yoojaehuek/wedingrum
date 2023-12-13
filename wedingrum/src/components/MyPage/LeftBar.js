import React from "react";

function LeftBar ({ onMenuClick }){
  return (
    <div className="left-bar">
      <ul>
        <li onClick={() => onMenuClick('내 정보')}>내 정보</li>
        <li onClick={() => onMenuClick('내정보 수정')}>내정보 수정</li>
        <li onClick={() => onMenuClick('회원 탈퇴')}>회원 탈퇴</li>
      </ul>
    </div>
  );
}

export default LeftBar;
