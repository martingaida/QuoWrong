var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler, userValidators, loginValidators } = require('./utils');
const db = require('../db/models')
// const { User } = db;
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser } = require('../auth');


/* GET users listing. */
router.get('/', function (req, res, next) {
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
    loginUser(req, res, user);

    req.session.save(() => {
      return res.redirect('/');
    });

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

router.get('/login', csrfProtection, (req, res, next) => {

  if (res.locals.authenticated) {
    res.redirect('/');
  }

  res.render('login', {
    title: 'Log In!',
    csrfToken: req.csrfToken()
  });
});

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {
  const {
    userName,
    password
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    //find user by userName
    const user = await db.User.findOne({ where: { userName } })

    if (user !== null) {
      // If the user exists then compare their password
      // to the provided password.
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatch) {
        loginUser(req, res, user);

        req.session.save(() => {
          return res.redirect('/');
        });
      }
    }

    // if a user is not found by the username display an error
    errors.push('Login failed for the provided UserName and password');
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
    //user was not logged in, reload log in page
    res.render('login', {
      title: 'Login',
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}))


router.post('/logout', csrfProtection, logoutUser, (req, res) => {

  req.session.save(() => {
    res.redirect('/users/login')
})

});


module.exports = router;
