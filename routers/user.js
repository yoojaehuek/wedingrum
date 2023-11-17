const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
// const { Product, ProductDetail, ProductSubImage } = require('./models');

router.post('/', UserController.addUser)


module.exports = router;
