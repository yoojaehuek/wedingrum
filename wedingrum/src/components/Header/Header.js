import React, { useState } from "react";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Header = () => {
  
  const productData = [
    { id: 'prodpho', name: '웨딩 본식 상품', category: '웨딩 본식 상품' },
    { id: 'prodpho', name: '사진 촬영', category: '사진 촬영' },
    { id: 'prodmov', name: '영상 촬영', category: '영상 촬영' },
    { id: 'prodhair', name: '헤어&메이크업', category: '헤어&메이크업' },
    { id: 'prodbooth', name: '포토부스', category: '포토부스' },
    { id: 'prodetc', name: '축가/사회', category: '축가/사회' },
    { id: 'prodcar', name: '웨딩카', category: '웨딩카' },
    { id: 'prodbow', name: '폐백', category: '폐백' },
    { id: 'prodwdmg', name: '웨딩관리', category: '웨딩관리' },
  ];

    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <div id="header-container"
      className={isHeaderHovered ? 'hovered' : ''}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}>
      <div className='header-warp'>
        <a href='/'><img src='./img/header/logo.png' alt=''></img></a>
        <div className='header-item'>
          <ul>
            <li>
              <a href='/'>RESERVATIONS</a>
              <ul id='sub-menu'>
                <li><a href='/'>예식예약</a></li>
                <li><a href='/'>상담예약</a></li>
              </ul>
            </li>
            <li>
              <a href='/'>WEDDING</a>
              <ul id='sub-menu'>
                <li><a href='/'>잠실점</a></li>
                <li><a href='/'>반포점</a></li>
                <li><a href='/'>평택점</a></li>
                <li><a href='/'>선릉점</a></li>
                <li><a href='/'>공덕점</a></li>
              </ul>
            </li>
            <li>
              <a href='/'>PRODUCTS</a>
              <ul id='sub-menu'>
                {productData.map((item) => (
                  <li key={item.id}>
                    <NavLink to={`product/${item.id}`}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href='/'>PARTY</a>
              <ul id='sub-menu'>
                <li><a href='/'>연회</a></li>
              </ul>
            </li>
            <li>
              <a href='/exp'>EXPERIENCE</a>
              <ul id='sub-menu'>
                <li><a href='/exp'>골든웨딩</a></li>
                <li><a href='/exp1'>웨딩가모 앳홈</a></li>
                <li><a href='/exp2'>트리츠 스파</a></li>
                <li><a href='/exp3'>웨딩의 여신</a></li>
              </ul>
            </li>
            <li>
              <a href='/'>ABOUT</a>
              <ul id='sub-menu'>
                <li><a href='/'>브랜드 스토리</a></li>
                <li><a href='/'>회사소개</a></li>
              </ul>
            </li>
            <li>
              <a href='/'>CUSTOMER</a>
              <ul id='sub-menu'>
                <li><a href='/'>FAQ</a></li>
              </ul>
            </li>
            <li>
              <a href='/'><PersonOutlineIcon fontSize='medium'/></a>
              <ul id='sub-menu'>
                <li><a href="/Login">로그인</a></li>
                <li><a href="/Join">회원 가입</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
