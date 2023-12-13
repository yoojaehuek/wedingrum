const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const refresh = require('./refresh');

router.post('/join', UserController.addUser);
router.post('/login', UserController.loginUser);
router.get('/mypage', refresh, UserController.detailUser);
router.put('/update', refresh, UserController.setUser);

module.exports = router;
