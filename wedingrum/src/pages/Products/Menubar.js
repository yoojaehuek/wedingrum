import React from "react";
import { Link } from "react-router-dom";
import './Products.scss';

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul className="menu-items">
        <li><Link to="/product/prodpho">웨딩 본식 상품</Link></li>
        <li><Link to="/product/prodmov">사진 촬영</Link></li>
        <li><Link to="/product/prodhair">헤어&메이크업</Link></li>
        <li><Link to="/product/prodbooth">포토부스</Link></li>
        <li><Link to="/product/prodetc">축가/사회</Link></li>
        <li><Link to="/product/prodcar">웨딩카</Link></li>
        <li><Link to="/product/prodbow">폐백</Link></li>
        <li><Link to="/product/prodwdmg">웨딩관리</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
