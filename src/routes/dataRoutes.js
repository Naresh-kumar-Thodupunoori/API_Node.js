const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
console.log("reached data routes")
router.get('/data', dataController.getData);
router.get('/data/:id', dataController.getDataById);

module.exports = router;
