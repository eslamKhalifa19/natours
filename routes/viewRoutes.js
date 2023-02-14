const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm
} = require('../controllers/viewController');

const router = express.Router();

router.get('/', getOverview);
router.get('/tour/:slug', getTour);
router.get('/login', getLoginForm);

module.exports = router;
