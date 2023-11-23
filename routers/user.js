const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
const refresh = require('./refresh');
const authJWT = require('../utils/authJWT');
// const { Product, ProductDetail, ProductSubImage } = require('./models');

router.post('/join', UserController.addUser)
router.post('/login', UserController.loginUser)
router.get('/mypage', UserController.detailUser)


module.exports = router;
