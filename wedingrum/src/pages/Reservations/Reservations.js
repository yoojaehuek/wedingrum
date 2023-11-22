import React from 'react';
import './Reservations.scss'
const Reservations = () => {
    
    return (
            <form id="login-form" onsubmit="">
                <h3>MEMBER</h3>
                <h1>로그인</h1>
                <div id="login-input">
                    <li><input id="id" type="text" placeholder='아이디'/></li>
                    <li><input id="pw d" type="password" placeholder='비밀번호'/></li>
                </div>
                
                <li>
                    <button type="submit" id='login-btn'>LOGIN</button>
                </li>

                <li id='find-id-form'>
                    <a href="/join">회원가입</a>
                    <a href="/find-id">아이디/비밀번호 찾기</a>
                </li>

            </form>
    );
}

export default Reservations;