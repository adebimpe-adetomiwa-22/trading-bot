const express = require('express');
const router = express.Router();
const autoSell = require('../controllers/autoSell');

router.route('/').post(autoSell);

module.exports = router;
