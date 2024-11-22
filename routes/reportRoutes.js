const express = require('express');
const reportController = require('../controllers/reportController');
const router = express.Router();

router.get('/', reportController.getReports);
router.get('/upload', reportController.uploadReport);
router.post('/upload', reportController.uploadReport);
router.get('/delete/:id', reportController.deleteReport);

module.exports = router;
