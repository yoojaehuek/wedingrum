const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const { sequelize } = require('./models');//DB테이블
require('dotenv').config();

//시퀄라이즈 연결 부분
sequelize.sync({ force: false }) //force가 true면 킬때마다 DB 새로 만듬
.then(() => { 
  console.log("DB연결 성공");
})
.catch((err) => {
  console.error(err);
});


//로그 자세히보기
app.use(morgan('dev'));

// URL-encoded방식 사용할수있게 설정 (.urlencoded()은 x-www-form-urlencoded형태의 데이터를 해석  )
// json형식의 데이터를 처리할 수 있게 설정 (.json()은 JSON형태의 데이터를 해석.)
// 자세한 설명: https://kirkim.github.io/javascript/2021/10/16/body_parser.html
app.use(express.urlencoded({extended:false}));  
app.use(express.json());

// 브라우저 cors 이슈를 막기 위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
var cors = require('cors');
app.use(cors());

//포트는 .env파일의 PORT로 설정한 값
app.set('port', process.env.PORT);


app.use(express.static(path.join(__dirname, 'wedingrum/build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/wedingrum/build/index.html'));
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/wedingrum/build/index.html'));
});


app.listen(app.get('port'), function () { //서버실행
  console.log(app.get('port'),`에서 대기중`);
}); 