var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler, userValidators } = require('./utils');
const db = require('../db/models')
// const { User } = db;
const bcrypt = require('bcryptjs');
const { check, validationResult} = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/sign-up', csrfProtection, (req, res, next) => {
  const user = db.User.build();
  res.render('sign-up', {
    title: 'Sign Up!',
    user,
    csrfToken: req.csrfToken()
  });
});

router.post('/sign-up', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    userName,
    password,
  } = req.body;

  const user = db.User.build({
    email,
    firstName,
    lastName,
    userName
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    // loginUser(req, res, user);
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('sign-up', {
      title: 'Sign Up!',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}))

module.exports = router;
