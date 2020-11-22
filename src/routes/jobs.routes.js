const { Router } = require('express');
const router = Router();

const { isAuthenticated } = require('../helpers/auth');
const { renderSearch, search } = require('../controllers/jobs.controller');

router.get('/jobs', isAuthenticated, renderSearch);
router.post('/jobs', isAuthenticated, search);

module.exports = router;