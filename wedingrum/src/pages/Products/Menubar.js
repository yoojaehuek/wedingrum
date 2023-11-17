import React from "react";
import { Link } from "react-router-dom";
import './Products.scss';

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul className="menu-items">
        <li><Link to="/ProdPho">사진촬영</Link></li>
        <li><Link to="/ProdMov">영상촬영</Link></li>
        <li><Link to="/ProdHair">헤어&메이크업</Link></li>
        <li><Link to="/ProdPhoBoo">포토부스</Link></li>
        <li><Link to="/ProdEtc">축가/사회</Link></li>
        <li><Link to="/ProdCar">웨딩카</Link></li>
        <li><Link to="/ProdBow">폐백</Link></li>
        <li><Link to="/ProdWdMg">웨딩관리</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
