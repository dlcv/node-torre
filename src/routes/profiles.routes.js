const { Router } = require('express');
const router = Router();

const { isAuthenticated } = require('../helpers/auth');
const { renderSearch, search } = require('../controllers/profiles.controller');

router.get('/profiles', isAuthenticated, renderSearch);
router.post('/profiles', isAuthenticated, search);

module.exports = router;