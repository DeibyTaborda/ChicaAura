const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');

router.post('/register', userController.registerUser);
router.post('/create-rol', userController.createRol);
router.post('/create-contact', userController.createContact);
router.post('/login', loginController.loguearUser);

module.exports = router;