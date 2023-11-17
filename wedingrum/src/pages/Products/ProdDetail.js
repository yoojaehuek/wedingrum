import React, { useState } from "react";
import './Products.scss';
import ListIcon from '@mui/icons-material/List';

// 상세페이지 컴포넌트
const ProdDetail = () => {
  // 선택된 이미지 인덱스 관리하는 친구
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

  // JSX를 반환
  return (
    <div className="detail-container">
      <div className="image-container">
        {/* 선택된 이미지를 표시하는 이미지 태그. 간단하게 현재 선택된 썸네일에 해당하는 이미지 경로 나타내줌 */}
        <img src={galleryImages[selectedImage]} alt="Product" />
        {/* 썸네일을 표시하는 오버레이 영역 */}
        <div className="image-overlay">
        {/* 이미지는 파일 경로, 인덱스는 해당 이미지의 배열 내 인덱스 */}
          {galleryImages.map((image, index) => (
            // 각 썸네일을 나타내는 div 태그
            <div
              key={index} // 반복되는 자식 찾으려고 고유키 설정해줌
              // 썸네일을 동적으로 설정. 현재 선택된 이미지의 인덱스와 현재 썸네일 인덱스가 일치하면 액티브 클래스 추가해서 강조해줌
              className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)} // 썸네일이 클릭되면 핸들썸네일클릭 함수 호출해서 이미지 변경. 함수에 클릭된 썸네일 인덱스가 전달됨
            >
              {/* 썸네일 이미지를 표시하는 이미지 태그. 대체 텍스트. 다들 알죠. 업로드 못했을 때 보여주는 친구. ex)1.썸네일1, 2.썸네일2 이런식 */}
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {/* 제품 설명을 표시하는 컨테이너 */}
      <div className="description-container">
        <div className="header">
          {/* 카테고리와 이전 페이지로 돌아가는 버튼 */}
          <p>{productDetails.category}</p>
          <button className="list-button" onClick={goBack}>
            <ListIcon fontSize="large" />
          </button>
        </div>
        {/* 제목과 설명을 표시하는 태그들 */}
        <h1>{productDetails.title}</h1>
        <p>{productDetails.description}</p>
        {/* 제품 세부 정보를 표시하는 컨테이너 */}
        <div className="details">
          {productDetails.details.map((detail, index) => (
            // 각 세부 정보를 나타내는 div 태그
            <div key={index} className="detail">
              <p>{detail.type}</p>
              {/* 설명과 가격을 표시하는 태그들 */}
              <span className="description">{detail.description}</span>
              <span className="price">{(+detail.price).toLocaleString()}원</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProdDetail;
