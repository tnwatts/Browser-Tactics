// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
router.get('/profile/:id', ensureLoggedIn, usersCtrl.profile)
router.delete('/:id', usersCtrl.deleteUser)
router.put('/profile/:id', ensureLoggedIn, usersCtrl.setName)

module.exports = router;
