const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
// const { Product, ProductDetail, ProductSubImage } = require('./models');

router.post('/join', UserController.addUser)
router.post('/login', UserController.loginUser)


module.exports = router;
