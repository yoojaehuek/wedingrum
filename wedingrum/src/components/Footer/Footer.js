import React, { useState } from "react"
import '../Footer/Footer.scss'
import Modal from '../Modal/Modal';

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
        <div className='footer-toggle'>
          <button onClick={openModal}>개인정보처리방침</button>
            <Modal open={modalOpen} close={closeModal} header="개인정보처리방침">
              김준녕 바보
            </Modal>
        </div>
      <div className="footer-content">
          <div className="footer-section">
            <h2>회사 정보</h2>
            <p>회사 소개</p>
            <p>국제 대학교</p>
            <p>연락처:000-000-000</p>
          </div>
          <div className="footer-section">
            <h2>만든이</h2>
            <p>---</p>
            <p>---</p>
          </div>
          <div className="footer-section">
            <h2>팔로우</h2>
            <p>페이스북</p>
            <p>인스타그램</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 My Company. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer;