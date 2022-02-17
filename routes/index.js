const express = require('express');
const router = express.Router();

const { requireAuth } = require('../auth');

/* GET home page. */
router.get('/', requireAuth, function(req, res, next) {
  res.redirect('/questions');
});

module.exports = router;
