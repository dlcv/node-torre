const { Router } = require('express');
const router = Router();

const { isAuthenticated } = require('../helpers/auth');
const { renderRegister, register, renderLogin, login, renderWelcome, logout } = require('../controllers/users.controller');

router.get('/register', renderRegister);
router.post('/register', register);
router.get('/login', renderLogin);
router.post('/login', login);
router.get('/welcome', isAuthenticated, renderWelcome);
router.get('/logout', logout);

module.exports = router;