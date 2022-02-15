var express = require('express');
var router = express.Router();
const {csrfProtection, asyncHandler} = require('./utils');
const db = require('../db/models')
const { User } = db;
const bcrypt = require('bcryptjs');
const { check, validationResult} = require('express-validator');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/sign-up', csrfProtection, (req, res, next) => {
  const user = User.build();
  res.render('sign-up', {
    title: 'Sign Up!',
    user,
    csrfToken: req.csrfToken()
  })
})

module.exports = router;
