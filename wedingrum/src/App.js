import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import MyPage from './pages/Mypage/Mypage';
import MyPage2 from './pages/Mypage/Mypage2';
import './App.css';
import Exp from './pages/Experience/Exp/Exp';
import Exp1 from './pages/Experience/Exp1/Exp1';
import Exp2 from './pages/Experience/Exp2/Exp2';
import Exp3 from './pages/Experience/Exp3/Exp3';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/MyPage2' element={<MyPage2 />} />
        <Route path='/exp' element={<Exp />} />
        <Route path='/exp1' element={<Exp1 />} />
        <Route path='/exp2' element={<Exp2 />} />
        <Route path='/exp3' element={<Exp3 />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
