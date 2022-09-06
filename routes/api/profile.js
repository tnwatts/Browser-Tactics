
const express = require('express');
const router = express.Router();
const profileCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// router.post('/profile', profileCtrl.show);

module.exports = router;
