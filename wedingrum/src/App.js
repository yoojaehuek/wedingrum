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
import Product from './pages/Products/Product'
import ProdDetail from './pages/Products/ProdDetail';
import Wedding from './pages/Wedding/Wedding';
import Party from './pages/Party/Party';
import Login from './pages/Login/Login'
import Join from './pages/Join/Join'
import Joininput from './pages/Join/Join-input';
import Invitation from './pages/Mypage/Mypage3';
import Customer from './pages/Customer/Customer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/myPage' element={<MyPage />} />
        <Route path='/myPage2' element={<MyPage2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/exp' element={<Exp />} />
        <Route path='/exp1' element={<Exp1 />} />
        <Route path='/exp2' element={<Exp2 />} />
        <Route path='/exp3' element={<Exp3 />} />
        <Route path='/product/:id/:id' element={<ProdDetail />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/wedding' element={<Wedding />} />
        <Route path='/party' element={<Party />} />
        <Route path='/join' element={<Join />} />
        <Route path='/join-input' element={<Joininput />} />
        <Route path='/mypage3' element={<Invitation />} />
        <Route path='/faq' element={<Customer />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
