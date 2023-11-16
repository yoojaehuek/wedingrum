import React from 'react';
import './Join.scss'
import { NavLink } from 'react-router-dom';
const Join = () => {
    
    return (
            <form id="join-form" onsubmit="">
                <h3>MEMBER</h3>
                <h1>회원가입</h1>
                <h4>아펠가모 아이디와 비밀번호로 회원가입</h4>
                <li>
                    <button type="submit" id='join-btn'><NavLink to="/Join-input">회원가입</NavLink></button>
                </li>

            </form>
    );
}

export default Join;