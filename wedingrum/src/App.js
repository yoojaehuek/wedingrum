import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import Exp from './pages/Experience/Exp/Exp';
import Exp1 from './pages/Experience/Exp1/Exp1';
import Exp2 from './pages/Experience/Exp2/Exp2';
import Exp3 from './pages/Experience/Exp3/Exp3';
import Wedding from './pages/Wedding/Wedding';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Joininput from './pages/Join/Join-input';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='routes-container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/exp' element={<Exp />} />
          <Route path='/exp1' element={<Exp1 />} />
          <Route path='/exp2' element={<Exp2 />} />
          <Route path='/exp3' element={<Exp3 />} />
          <Route path='/wedding' element={<Wedding />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/joininput' element={<Joininput />} />
          
  
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
