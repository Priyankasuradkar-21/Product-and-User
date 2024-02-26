const express = require('express');
const { registerUser, login, getUserDetails } = require('../controller/userController');
const userValidation = require('../middleware/userValidation');
const router = express.Router();

router.post('/user/signup', registerUser);
router.post('/user/login', login);
router.get('/user/details', userValidation, getUserDetails);
module.exports = router;