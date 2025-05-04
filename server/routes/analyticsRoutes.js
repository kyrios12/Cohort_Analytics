const express = require('express');
const router = express.Router();
const {
  getCohortData,
  getLayerCakeData
} = require('../controllers/analyticsController');

router.get('/cohorts', getCohortData);
router.get('/layercake', getLayerCakeData);

// Need to do the code review
module.exports = router;
