const express = require('express');
const router = express.Router();
const reportController = require('../../controllers/reportController');

router.get('/daily-sales', reportController.getDailySales);

module.exports = router;