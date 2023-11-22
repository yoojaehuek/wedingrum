const Sequelize = require('sequelize'); 
const User = require('./user'); //user파일을 User로 불러옴 
// const Employee = require('./employee'); //employee파일을 Employee로 불러옴
// const Music = require('./music');
// const Pay = require('./pay');
// const Amount = require('./amount');
// const PlayHistory = require('./history');
// const PlayList = require('./playList');
const FAQ = require('./customer');
const ProductModels = require('./product');
const Planner = require('./planner')//planner 파일을 Planner로 불러옴
const Point = require('./point')//point.js 파일을 Point로 불러옴

const env = process.env.NODE_ENV || 'development'; //상수 env에 NODE_ENV없으면 'development' 넣음
const config = require('../config/config')[env]; //상수config에 ../config/config파일에서 env(development) 불러옴
const db = {}; //상수 db라는 빈 객체 생성

//sequelize 인스턴스 생성../config/config파일의 development 내용들 넣음  
const sequelize = new Sequelize(config.database, config.username, config.password, config); 

//생성된 인스턴스를 나중에 재사용하기 위해 db.sequelize에 넣음
db.sequelize = sequelize;

//만든 모델들 추가
db.User = User;
db.FAQ = FAQ;
db.Product = ProductModels.Product;
db.ProductDetail = ProductModels.ProductDetail;
db.ProductSubImage = ProductModels.ProductSubImage;
// db.Employee = Employee;
// db.Pay = Pay;
// db.Amount = Amount;
// db.Music = Music;
// db.PlayHistory = PlayHistory;
// db.PlayList = PlayList;

User.initiate(sequelize);
FAQ.initiate(sequelize);
ProductModels.Product.init(sequelize);
ProductModels.ProductDetail.init(sequelize);
ProductModels.ProductSubImage.init(sequelize);
// Employee.initiate(sequelize);
// Pay.initiate(sequelize);
// Amount.initiate(sequelize);
// Music.initiate(sequelize);
// PlayHistory.initiate(sequelize);
// PlayList.initiate(sequelize);

User.associate(db);
FAQ.associate(db);
ProductModels.Product.associate(db);
ProductModels.ProductDetail.associate(db);
ProductModels.ProductSubImage.associate(db);
// Employee.associate(db);
// Pay.associate(db);
// Amount.associate(db);
// Music.associate(db);
// PlayHistory.associate(db);
// PlayList.associate(db);
db.Planner = Planner;
db.Point = Point;


User.initiate(sequelize);
Planner.initiate(sequelize);
Point.initiate(sequelize);


User.associate(db);
Planner.associate(db);
Point.associate(db);


module.exports = db;
