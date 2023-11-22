import React from "react";
import './Products.scss';
import MenuBar from "./Menubar";
import { NavLink, useParams } from "react-router-dom";

const ProductPhoto = () => {
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

  const productsData = [
    { id: 1, name: "상품 1", price: 10000, image: "../image/Product/photo.jpg" },
    { id: 2, name: "상품 2", price: 15000, image: "../image/Product/photo.jpg" },
    { id: 3, name: "상품 3", price: 20000, image: "../image/Product/photo.jpg" },
    { id: 4, name: "상품 3", price: 20000, image: "../image/Product/photo.jpg" },
  ];

  // 배경 이미지를 동적으로 설정
  const backgroundImageStyle = {
    backgroundImage: `url(${data ? data.photo : ''})`,
  };

  return (
      <>
      <div className="product-page1" style={backgroundImageStyle}>
        <div className="product-content">
          <h1>Product</h1>
          <h3>{data ? data.name : '아무것도 없다.'}</h3>
        </div>
      </div>
      <MenuBar />
      <div className="photo-cards">
        {productsData.map(product => (
          <NavLink to='/ProdD'>
          <div key={product.id} className="photo-card">
            <img src={product.image} alt={product.name} /> 
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

export default ProductPhoto;

// map. 간단하게 설명. 일단 임시데이터로 예를 들어봄.
// map 함수는 배열을 순회하면서 각 요소에 특정 작업을 수행하게 하는 메서드임
// productsdata라는 임시데이터를 만든다. 우리가 넣으려고 하는 데이터들을 배열로 만듬.
// productsdata.map: productsdata 배열을 순회하여 각 요소를 처리하는데, 이를 (product) 변수에 담음.
// key는 필수. 중복요소를 없애야함. 그래서 고유값을 줘야함(ex:id)
// product 변수에 임시 데이터를 담아 사용자가 원하는 대로 활용할 수 있음.(ex:product.image 등)
// 그럼 반복하고, 랜더링하는데 사용되는 jsx를 만들어냄.
// 참고로 JSX는 자바스크립트 확장? 문법으로 XML이나 HTML이랑 비슷한 구조로 UI 표현하는 애임(이건 사실 잘 모름. 아마 맞을 듯)
// 주로 리액트에서 컴포넌트 구조 정의하고 랜더링할 때 사용됨
// 함수랑 메서드는 간단하게 설명하면 함수는 독립적인 작업 수행하는 애. 메서드는 특정 객체에 속한 동작 나타내는 애
// 인간으로 예를 들어봄. 함수 : 숨쉬기 / 메서드 : 성공하려고 공부한다.
// 숨쉬기는 일반적이고 기본 동작을 나타냄 하지만 메서드는 목적을 가지고 수행하는거임
// useparams - 현재 경로에서 추출한 매개변수 가져올 때 사용. (ex: /test/:id) 느낌.
// uselocation - 현재 url 정보를 제공하는 훅. 매개변수나 해시, 경로 정보 확인
// useeffect - 부수 효과 수행하려는 목적, 간단하게 컴포넌트가 랜더링 되면 특정 작업 수행하거나 상태 변경할 때 사용
// useasync - 비동기 작업할 때 사용. 보통 useeffect랑 같이 씀. 세트라 보면 됨.