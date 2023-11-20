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
import ProductPhoto from './pages/Products/ProdPho'
import ProductMovie from './pages/Products/ProdMov'
import ProductHair from './pages/Products/ProdHair'
import ProductPhoBoo from './pages/Products/ProdPhoBoo'
import ProductEtc from './pages/Products/ProdEtc'
import ProductCar from './pages/Products/ProdCar'
import ProductBow from './pages/Products/ProdBow'
import ProductWdMg from './pages/Products/ProdWdMg'
import ProdDetail from './pages/Products/ProdDetail';

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
        <Route path='/ProdPho' element={<ProductPhoto />} />
        <Route path='/ProdMov' element={<ProductMovie />} />
        <Route path='/ProdHair' element={<ProductHair />} />
        <Route path='/ProdPhoBoo' element={<ProductPhoBoo />} />
        <Route path='/ProdEtc' element={<ProductEtc />} />
        <Route path='/ProdCar' element={<ProductCar />} />
        <Route path='/ProdBow' element={<ProductBow />} />
        <Route path='/ProdWdMg' element={<ProductWdMg />} />
        <Route path='/ProdD' element={<ProdDetail />} />
        <Route path='/product/:id' element={<ProductPhoto />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
