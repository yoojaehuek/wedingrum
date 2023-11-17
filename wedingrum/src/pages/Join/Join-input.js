import React from 'react';
import './Join-input.scss'
const Join = () => {
    return (
<form id="join-input-form" onsubmit="">
    <h3>MEMBER</h3>
    <h1>회원가입</h1>

        <ul id='join-input'>
            <li>
                <div className='input-box'>
                    <h5>이름 *</h5><input type="text" placeholder='이름'/>
                </div>
                <div>
                    <h5>아이디 *</h5><input type="text" placeholder='영문,숫자8자~16자로 입력해주세요'/>
                </div>
            </li>
            <li>
                <div className='input-box'>
                    <h5>비밀번호 *</h5><input type="password" placeholder='영문,숫자8자~16자로 입력해주세요'/>
                </div>
                <div>
                    <h5>비밀번호 확인 *</h5><input type="password" placeholder='비밀번호 재입력'/>
                </div>
            </li>
            <li>
                <div className='input-box'>
                    <h5>전화번호 *</h5><input type="text" placeholder='숫자만 입력해주세요'/>
                </div>
                <div className='input-box'>
                    <h5>생년월일 성별 *</h5><input type="text" />
                    <div>
                        <input type="radio" className='gender' id='gender-m' name="gender" value="man"/>남
                        <input type="radio" className='gender' id='gender-w' name="gender" value="woman"/>여
                    </div>
                </div>
            </li>
            <li>
                <div className='input-box'>
                    <h5>배우자 이름 *</h5><input type="text" />
                </div>
                <div className='input-box'>
                    <h5>배우자 전화번호 *</h5><input type="text" />
                </div>
            </li>
            <li>
                <button type="submit" id='join-btn'>회원가입</button>
            </li>

        </ul>

</form>
    );
}

export default Join;