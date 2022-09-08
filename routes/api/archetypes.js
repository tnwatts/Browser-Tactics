
const express = require('express');
const router = express.Router();
const archetypeCtrl = require('../../controllers/api/archetypes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/users/:id', archetypeCtrl.usersList);

module.exports = router;
