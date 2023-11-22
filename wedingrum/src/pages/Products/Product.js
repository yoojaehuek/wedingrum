import React, { useState, useEffect } from "react";
import './Products.scss';
import MenuBar from "./Menubar";
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../config/contansts';

const Product = () => {
  const { id } = useParams();
  const Data = {
    'prodpho': { name: '사진촬영', photo: '../image/Product/photo.jpg' },
    'prodmov': { name: '영상촬영', photo: '../image/Product/movie.jpg' },
    'prodhair': { name: '헤어&메이크업', photo: '../image/Product/hair.jpg' },
    'prodbooth': { name: '포토부스', photo: '../image/Product/booth.jpg' },
    'prodetc': { name: '축가/사회', photo: '../image/Product/Etc.jpg' },
    'prodcar': { name: '웨딩카', photo: '../image/Product/car.jpg' },
    'prodbow': { name: '폐백', photo: '../image/Product/bow.jpg' },
    'prodwdmg': { name: '웨딩관리', photo: '../image/Product/WdMg.jpg' },
  };

  const data = Data[id];
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/${id}`);
        setProductsData(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 도중 에러 발생:', error);
      }
    };

    fetchData();
  }, [id]);

  const backgroundImageStyle = {
    backgroundImage: `url(${data ? data.photo : ''})`,
  };

  const filteredProducts = productsData.filter(product => product.category === id);

  return (
    <>
      <div className="product-page1" style={backgroundImageStyle}>
        <div className="product-content">
          <h1>Product</h1>
          <h3>{data ? data.name : '아무것도 없다.'}</h3>
        </div>
      </div>
      <MenuBar categories={['prodpho', 'prodmov', 'prodhair', 'prodbooth', 'prodetc', 'prodcar', 'prodbow', 'prodwdmg']} />
      <div className="photo-cards">
        {filteredProducts.map(product => (
          <NavLink to={`/product/${id}/${product.id}`} key={product.id}>
            <div className="photo-card">
              <img src={`..${product.image}`} alt={product.name} />
              <div className="card-details">
                <h3>{product.name}</h3>
                <p>{`가격: ${product.price}원`}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Product;
