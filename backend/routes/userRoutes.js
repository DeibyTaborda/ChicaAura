const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');
const {verificarToken} = require('../controllers/loginController');

router.post('/register', userController.registerUser);
router.post('/create-rol', userController.createRol);
router.post('/create-contact', userController.createContact);
router.get('/users', verificarToken, userController.getUsers);
router.get('/contacts', userController.getContacts);
router.get('/roles', userController.getRoles);
router.post('/login', loginController.loguearUser);

module.exports = router;