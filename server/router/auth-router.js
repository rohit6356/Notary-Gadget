const express = require('express')
const authController = require('../controller/auth-controller')
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
// import authMiddleware from '../middleware/auth-middleware';

router.route('/').get(authController.home);
router.route('/register').post( authController.register);
router.route('/login').post( authController.login);
router.route('/user').get(authMiddleware , authController.userAuth);

module.exports = router;