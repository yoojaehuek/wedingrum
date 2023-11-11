import React, { useState } from "react";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <div id='header-container'>
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
                <li><a href='/'>웨딩 본식 상품</a></li>
                <li><a href='/'>사진촬영</a></li>
                <li><a href='/'>영상촬영</a></li>
                <li><a href='/'>혼주 헤어&메이크업</a></li>
                <li><a href='/'>포토부스</a></li>
                <li><a href='/'>축가/사회</a></li>
                <li><a href='/'>웨딩관리</a></li>
              </ul>
            </li>
            <li>
              <a href='/'>PARTY</a>
              <ul id='sub-menu'>
                <li><a href='/'>연회</a></li>
              </ul>
            </li>
            <li>
              <a href='/'>EXPERIENCE</a>
              <ul id='sub-menu'>
                <li><a href='/'>골든웨딩</a></li>
                <li><a href='/'>웨딩가모 앳홈</a></li>
                <li><a href='/'>트리츠 스파</a></li>
                <li><a href='/'>웨딩의 여신</a></li>
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
              <a href='/'>로그인</a>
              <ul></ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
