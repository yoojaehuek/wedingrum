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
import Product from './pages/Products/Product'
import ProdDetail from './pages/Products/ProdDetail';
import Wedding from './pages/Wedding/Wedding';
import Party from './pages/Party/Party';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/exp' element={<Exp />} />
        <Route path='/exp1' element={<Exp1 />} />
        <Route path='/exp2' element={<Exp2 />} />
        <Route path='/exp3' element={<Exp3 />} />
        <Route path='/ProdD' element={<ProdDetail />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/wedding' element={<Wedding />} />
        <Route path='/party' element={<Party />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
