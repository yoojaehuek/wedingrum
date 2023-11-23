import React, { useState, useEffect } from "react";
import './Products.scss';
import ListIcon from '@mui/icons-material/List';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import { useParams } from 'react-router-dom';

const ProdDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/${id}`);
        if (!response.data || response.data.error) {
          console.error('확실히 문제가 있어.');
          return;
        }
        setProductDetails(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error('에러:', error);
      }
    };


    fetchData();
  }, [id]);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  if (!productDetails) {
    return <p>제발 되게 해주세요..</p>;
  }

  return (
    <div className="detail-container">
      <div className="image-container">
        <img src={productDetails.imageUrl} alt="Product" />
        <div className="image-overlay">
          {Array.isArray(productDetails.galleryImages) &&
            productDetails.galleryImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="description-container">
        <div className="header">
          <p>{productDetails.category}</p>
          <button className="list-button" onClick={goBack}>
            <ListIcon fontSize="large" />
          </button>
        </div>
        <h1>{productDetails.title}</h1>
        <p>{productDetails.description}</p>
        <div className="details">
          {productDetails && (
            <div className="detail">
              <p>{productDetails.detailtype}</p>
              <span className="description">{productDetails.detaildescription}</span>
              <span className="price">{(+productDetails.detailprice).toLocaleString()}원</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProdDetail;
