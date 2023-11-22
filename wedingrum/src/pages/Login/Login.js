import React from 'react';
import './Login.scss'
import axios from 'axios';
import { API_URL } from '../../config/contansts'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const onLogin = async (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const pwd = e.target.pwd.value;
        console.log("id: ", id);
        console.log("pwd: ", pwd);
        const res = await axios.post(`${API_URL}/user/login`, {id, pwd});
        if (res.status == 200) {
            navigate("/")
        }
        console.log("Login.res: ",res.status);
    }
    return (
            <form id="login-form" onSubmit={onLogin}>
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

export default Login;