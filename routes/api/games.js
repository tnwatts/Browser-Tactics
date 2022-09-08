
const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/users/:id', gamesCtrl.create);
router.get('/users/:id', gamesCtrl.getByUser);
router.put('/users/:id', gamesCtrl.addPlayer2);

module.exports = router;
