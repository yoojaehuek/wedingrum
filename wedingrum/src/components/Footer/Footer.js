import React, { useState } from "react"
import '../Footer/Footer.scss'
import Modal from '../Modal/Modal';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from "react-router-dom";

const Footer = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

    return (
      <footer className="footer">
        <div className='footer-toggle2'>
        </div>
      <div className="footer-content">
          <div className="footer-section">
            <NavLink to=''><img src="./img/header/logo.png" alt=""></img></NavLink>
          </div>
          <div className="footer-section">
            <h2>회사 정보</h2>
            <p>회사 소개</p>
            <p>국제 대학교</p>
            <p>연락처:000-000-000</p>
          </div>
          <div className="footer-section">
            <h2>뉴스</h2>
          </div>
          <div className="footer-section">
            <h2>기술 및 서비스</h2>
            <p>기술</p>
            <p>서비스</p>
          </div>
          <div className="footer-section4">
            <h2>만든이</h2>
          </div>
          <div className="footer-section5">
            <p>김지환</p>
            <p>김준녕</p>
            <p>김정혁</p>
            <p>박승균</p>
            <p>백승준</p>
            <p>임헌성</p>
            <p>유재혁</p>
          </div>
          <div className="footer-section2">
            <div className="footer-section2">
              <h2>스마트예약 고객센터 : 02-512-7011</h2>
              <h3>월~일 : 10시 ~ 19시 (점심: 12시 ~ 13시)</h3>
            </div>
            <div className="footer-section3">
              <NavLink to="/"><FacebookIcon fontSize="large"/></NavLink>
              <NavLink to="/"><InstagramIcon fontSize="large"/></NavLink>
              <NavLink to="/"><TwitterIcon fontSize="large"/></NavLink>
            </div>
            <div className='footer-toggle'>
              <button onClick={openModal}>개인정보처리방침</button>
                <Modal open={modalOpen} close={closeModal} header="개인정보처리방침">
                  <p><strong>웨딩룸 개인정보처리방침</strong><br></br><br></br>
                  웨딩룸 주식회사(이하 ‘회사’)는 개인정보보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립공개합니다.</p>
                  <br></br><br></br><p><strong>제1조</strong><br></br><br></br>
                  회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  <br></br>
                  1. 홈페이지 회원 가입 및 관리
                  회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별인증, 회원자격 유지관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 각종 고지통지, 고충처리 등을 목적으로 개인정보를 처리합니다.
                  <br></br>
                  2. 재화 또는 서비스 제공
                  서비스 제공, 계약서청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제정산, 채권추심 등을 목적으로 개인정보를 처리합니다.</p>
                </Modal>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 My Company. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer;