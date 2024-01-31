
# WeddingRum 💐

> WeddingRum은 꿈꾸던 결혼식을 현실로 만들어주는 특별한 장소로, 아름다운 공간과 서비스로 특별한 날을 더욱 특별하게

## 어떤 서비스인가요?

- WeddingRum은 특별한 결혼식을 위한 전문 서비스를 제공하는 결혼식장으로, 고객들에게 아름다운 장소, 커스텀 메뉴, 이벤트 계획 및 조직 지원과 같은 종합적인 이벤트 관리 서비스를 제공

## Contents

Click to scroll to that page

1. How to start? : 시작 가이드
2. Project Info : 프로젝트 소개

- ​Project intention : 프로젝트 기획 의도
- Service : 서비스
- How can use this project?

3. Stacks : 사용 기술 스택
4. WEB MVP & Project tree : 주요 기능 및 프로젝트 구조

- Page Image 페이지 구성
- 기능 소개
- ERD

5. Trouble Shooting : 트러블 슈팅
6. END with Members: 프로젝트 멤버 및 역할 소개

## 1. How to start : 시작 가이드

For building and running the application you need :

- [Node.js 18.16.1](https://nodejs.org/en)
- [npm 9.7.2](https://www.npmjs.com/)
- MariaDB 10.3.11

Installation

```bash
https://github.com/KJH1225/wedingrum.git
```

Front (popol3/wedingrum/)에서

```
npm i --force
npm run build
```

DB

```
popol3/database/sqlFile/wedingrumdb.sql 실행
popol3/config/config.json 파일의 development: {} 내용을 자신에 맞게 수정
```


Back (popol3/)에서

```
npm i 
npm start
```

접속

```
http://localhost:8082 접속
```

## 💻 2. Project Info : 프로젝트 소개

### ✔️개발 기간

- 2023.11.09 ~ 2023.11.30 (3주)

### ✔️ 배포 서버

- 

### ✔️ 프로젝트 기획 의도

서비스 소개

- 꿈꾸던 결혼식을 현실로 만들어 주는 장소
- 다양한 서비스로 특별한 날을 더욱 특별하게
  
기능 소개

- 상품소개
- 예약 서비스
- 지점 소개
- 서비스 소개
- 회원 가입 / 탈퇴
- 로그인 / 로그아웃
- FAQ
- 마이페이지
- 연회장 소개
- 브랜드 소개

### ✔️ 서비스

#### 서비스 설명
1. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명

   1. 상품소개
      - 웨딩 상품 관련 서비스 소개
      - 사진/영상 촬영, 헤어&메이크업, 포토부스 등 상품 목록 DB에서 조회
      - 상품 선택 후 자세한 정보 확인 가능

    2. 예약 서비스 
        - 상담 예약 서비스 기능
        - 원하는 상담 방식 선택 후 진행
        - 방문 상담 시 원하는 지점, 방문일, 시간대, 연락방식, 인원, 상담사 선택

    3. 지점 소개
        - 각 지점의 소개 및 자세한 정보 확인 가능
        - 지도 및 교통편 설명을 통한 편의성 중시
        - 각 지점의 이미지를 DB에서 조회
    
    4. 서비스 소개
        - 고객이 원하는 서비스 소개
        - 감각적인 디자인을 통해 시각적 편안함
        - 장소, 커스텀 메뉴 등 감각적 이벤트 관리 서비스 추구
    
    5. 회원가입/탈퇴 기능
        - 회원가입을 통해 서비스에 가입 및 이용 가능
        - 필요한 정보를 데이터베이스에 저장(아이디, 비밀번호 등)
        - 가입 후 로그인 가능
        - 마이페이지에서 회원 탈퇴 가능
        - 탈퇴 전 추가 확인 창이 표시되며, 확인 후 회원 정보 삭제
    
    6. 로그인/로그아웃 기능
        - 등록된 사용자 아이디, 비밀번호를 입력하여 로그인 가능
        - 서버는 입력된 정보를 검증 후 올바른 경우 인증 토큰 부여
        - 인증 토큰 확인하여 권한 있는지 확인 후 서비스 모든 기능 이용
        - 사용자는 세션 토큰을 통해 로그인 상태 유지
        - 서버에 요청을 보낼 때마다 토큰 유효성 확인/만료시 로그인 페이지로 리다이렉트
        - 로그아웃 클릭 시 세션 토큰을 무효화하여 로그아웃 처리
        - 로그아웃 후 일부 기능 접근 제한
    
    7. FAQ
        - 고객이 자주 묻는 질문 답변
        - 검색 및 카테고리, 버튼을 통해 편리함
        - DB에서 데이터를 가져와 아코디언 방식으로 구현
    
    8. 마이페이지 기능
        - 마이페이지에서 개인 정보를 확인하고 수정 가능
        - 예약 내역 조회 및 취소 가능
        - 샘플 청첩장 시각적으로 표현

    9. 연회장 소개
        - 연회장 및 대관 관련 서비스 소개
        - 수용인원 및 주차가능 설명
        - 제공되는 음식 소개
          
    10. 브랜드 소개
        - 브랜드 및 회사 소개 페이지
        - 스토리와 역사를 보여주는 페이지
      
4. 유저 시나리오
  - WHO 
    - 결혼을 앞둔 커플
  - WHAT
    - 결혼을 계획하고 이를 위한 서비스와 세부사항
  - WHEN
    - 결혼을 위한 준비를 진행 중
  - WHERE
    - 결혼식이 열릴 장소 및 그와 관련된 다양한 공간
  - WHY
    - 한 번뿐인 결혼식을 잊지 못할 순간으로 만들기 위해
    - 로맨틱하고 아름다운 장소 및 전문적인 플래너, 예술적인 디자인과 인테리어를 가진 결혼식장


### ✔️ 프로젝트 구조

#### 🧩 front-end


> 페이지별 구조

- Main : 페이지 기반으로 구현된 서비스.
* Main : 메인페이지/ 경로 접속 시 라우팅되는 메인 페이지
* Reservation : 상담 예약 관련 페이지
* Wedding : 각 지점을 보여주는 페이지
* Products : 웨딩 관련 상품 보여주는 페이지
* Party : 연회/대관 소개 페이지
* Experience : 서비스 소개 페이지
* About : 브랜드 및 회사 소개 페이지
* Customer : 자주 묻는 질문(FAQ) 페이지
* Mypage : 회원 계정 정보를 확인 및 수정 페이지

#### 🧩 back-end

> 로직 구조

- config : 환경변수 설정
- model : DB와 연동하여 사용자가 입력한 데이터나 사용자에게 출력할 데이터 질의
- schemas : DB와 테이블 정의
- sqlFile : DB 파일 저장
- routes : 요청 받은 정보를 알맞게 가공 후 사용자가 입력한 데이터나 사용자에게 출력할 데이터 질의
- controllers : 서비스로 요청 전달 및 응답 
- utils/token: JWT토큰 생성, 회원 인증
- services : 요청받은 정보를 알맞게 가공하는 로직 수행

#### 🧩 ERD

### ✔️ 페이지 구성

## 💻 3. Stacks

<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="react" src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt="node.js" src ="https://img.shields.io/badge/node.js-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="express" src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=white"/> <img alt="Sequelize" src ="https://img.shields.io/badge/sequelize-52B0E7.svg?&style=for-the-badge&logo=sequelize&logoColor=white"/> <img alt="MySQL" src ="https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/> <img alt="MUI" src ="https://img.shields.io/badge/mui-007FFF.svg?&style=for-the-badge&logo=mui&logoColor=white"/>
### 💻 Dependencies

<img alt="npm" src ="https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/> <img alt="axios" src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/> <img alt=".env" src ="https://img.shields.io/badge/.ENV-ECD53F.svg?&style=for-the-badge&logo=dotenv&logoColor=white"/> <img alt="multer" src ="https://img.shields.io/badge/multer-000000.svg?&style=for-the-badge&logo=multer&logoColor=White"/>


## 6. END

- 한국정보교육원 웹 프론트엔드 클라우드 콘솔 개발자 양성과정 3회차 1조 

## ✔️프로젝트 멤버 구성

|  front-end   | back-end |
| :----------: | :------- |
| 김지환(팀장) | 김지환    |
|    김준녕    | 김준녕    |
|    임헌성    | 임헌성    |
|    박승균    |          |
|    백승준    |          |
|    김정혁    |          |
|    유재혁    | 유재혁    |    
## 팀원별 역할

### 김지환(팀장)

- Node.js 서버 구조 설계(Routers-Controllers-Services 구조)
- React 폴더 구조 설계 
- JWT accessToken, refreshToken과 Redis를 사용한 사용자 인증 구현
- Recoil 상태관리 라이브러리를 사용해 사용자 로그인 상태 관리
- Reservation페이지 예약 기능 백엔드 구현
- Mypage기능 백앤드 구현

### 김준녕

- Product 프론트엔드 및 백엔드
- ProductDetail 프론트 및 백엔드
- Customer 프론트엔드 및 백엔드
- UI 리서칭
- css 스타일링 / 디자인

### 유재혁

- 로그인/회원가입 프론트엔드 및 백엔드
- 마이페이지 수정 기능 백엔드
- CSS 스타일링 / 디자인
- UI 리서칭

### 김정혁

- Wedding 프론트엔드
- Leaflet API를 활용한 웹에서 지도 구현
- CSS 스타일링 / 디자인
- UI 리서칭
  
### 임헌성

- 메인페이지 구현 및 Leaflet API 호출
- 헤더 / 푸터 구현
- UI 리서치
- CSS 스타일링 / 디자인
- 마이페이지 프론트엔드 및 백엔드
- 예약페이지 프론트엔드 및 백엔드

### 박승균

- Experience 프론트엔드
- UI 리서칭
- CSS 스타일링 / 디자인

### 백승준

- Party 프론트엔드
- About 프론트엔드
- UI 리서칭
- CSS 스타일링 / 디자인
