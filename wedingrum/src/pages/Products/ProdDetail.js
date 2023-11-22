import React, { useState, useEffect } from "react";
import './Products.scss';
import ListIcon from '@mui/icons-material/List';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import { useParams } from 'react-router-dom';

const ProdDetail = () => {
  // const { id, productId } = useParams();
  // const [selectedImage, setSelectedImage] = useState(0);
  // const [productDetails, setProductDetails] = useState(null);

  // useEffect(() => {
  //   const fetchProductDetails = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/product/${id}/${id}`);
  //       setProductDetails(response.data);
  //     } catch (error) {
  //       console.error('에러:', error);
  //     }
  //   };

  //   fetchProductDetails();
  // }, [id, productId]);

  // const handleThumbnailClick = (index) => {
  //   setSelectedImage(index);
  // };

  // const goBack = () => {
  //   window.history.back();
  // };

  // if (!productDetails) {
  //   return <p>Loading.</p>;
  // }
  const [selectedImage, setSelectedImage] = useState(0);

  // 임시 데이터 임시 이미지 경로
  const galleryImages = [
    "../image/Product/photo.jpg",
    "../image/Product/Etc.jpg",
    "../image/Product/car.jpg"
  ];
  const productDetails = {
    category: "PRODUCTS > 사진 촬영",
    title: "본식 스냅 촬영",
    description: "그날의 생생한 감동과 행복한 순간을 오롯이 한 권에 담습니다.",
    details: [
      {
        type: "1인 촬영",
        description: "50P앨범(14X11인치)1권 + 50P(10X8인치)앨범 2권 원본, 수정본 별도(신부대기실부터 촬영)",
        price: "770000"
      },
      {
        type: "다른 상품",
        description: "다른 상품의 설명",
        price: "45000"
      }
    ]
  };

  // 썸네일 클릭 시 호출되는 함수, 간단. 인덱스는 사용자가 클릭한 썸네일 배열을 나타냄
  // 고로 해당 인덱스를 사용해 선택된 이미지 업데이트해줌
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  // 브라우저 세션 히스트 정보 찾아서 이전 페이지로 이동
  const goBack = () => {
    window.history.back();
  };

//   return (
//     <div className="detail-container">
//       <div className="image-container">
//         <img src={productDetails.imageUrl} alt="Product" />
//         <div className="image-overlay">
//           {productDetails.subImages && productDetails.subImages.map((subImage, index) => (
//             <div
//               key={index}
//               className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
//               onClick={() => handleThumbnailClick(index)}
//             >
//               <img src={subImage.subImageUrl} alt={`Thumbnail ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="description-container">
//         <div className="header">
//           <p>{productDetails.category}</p>
//           <button className="list-button" onClick={goBack}>
//             <ListIcon fontSize="large" />
//           </button>
//         </div>
//         <h1>{productDetails.name}</h1>
//         <p>{productDetails.description}</p>
//         <div className="details">
//           {productDetails.details && productDetails.details.map((detail, index) => (
//             <div key={index} className="detail">
//               <p>{detail.type}</p>
//               <span className="description">{detail.detailDescription}</span>
//               <span className="price">{(+detail.detailPrice).toLocaleString()}원</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


 // JSX를 반환
return (
  <div className="detail-container">
    <div className="image-container">
      <img src={galleryImages[selectedImage]} alt="Product" />
      <div className="image-overlay">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
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
        {productDetails.details.map((detail, index) => (
          <div key={index} className="detail">
            <p>{detail.type}</p>
            <span className="description">{detail.description}</span>
            <span className="price">{(+detail.price).toLocaleString()}원</span>
          </div>
        ))}
      </div>
    </div>
  </div>
); 
        }

export default ProdDetail;

//아 진짜 못햄거겠ㅇ요 tqtqtqtqtqtqtqtqtqqqqqqqqqqqttqtqtqtqtqtqtqtqtqtq