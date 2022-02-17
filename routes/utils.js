const csrf = require('csurf');
const csrfProtection = csrf({ cookie:true });

const { check, validationResult} = require('express-validator');
const db = require('../db/models');

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const userValidators = [
    check('firstName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for First Name')
      .isLength({ max: 50 })
      .withMessage('First Name must not be more than 50 characters long'),
    check('lastName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Last Name')
      .isLength({ max: 50 })
      .withMessage('Last Name must not be more than 50 characters long'),
    check('userName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Username')
      .isLength({ min: 4, max: 20 })
      .withMessage('Username must be at least 4 characters long and not more than 20 characters long')
      .matches(/^[a-zA-Z0-9]{4,20}$/)
      .withMessage('Username must not contain any special characters (i.e. "!@#$%^&*") and must be at least 4 characters long')
      .custom((value) => {
        return db.User.findOne({ where: { userName: value } })
          .then((user) => {
            if (user) {
              return Promise.reject('The provided Username is already in use by another account');
            }
          });
      }),
    check('email')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Email Address')
      .isLength({ max: 200 })
      .withMessage('Email Address must not be more than 200 characters long')
      .isEmail()
      .withMessage('Email Address is not a valid email')
      .custom((value) => {
        return db.User.findOne({ where: { email: value } })
          .then((user) => {
            if (user) {
              return Promise.reject('The provided Email Address is already in use by another account');
            }
          });
      }),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Password')
      .isLength({ max: 50 })
      .withMessage('Password must not be more than 50 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
      .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    check('confirmPassword')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Confirm Password')
      .isLength({ max: 50 })
      .withMessage('Confirm Password must not be more than 50 characters long')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Confirm Password does not match Password');
        }
        return true;
      }),
  ];

  const loginValidators = [
    check('userName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Userame'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Password'),
  ];

  const answerValidators = [
    check('questionId')
      .exists({ checkFalsy: true })
      .withMessage('answer not for a valid a question.'),
    check('content')
      .exists({ checkFalsy: true })
      .withMessage('please at least TRY and answer the question'),
  ]


  const questionValidators = [
    check('headline')
    .exists({ checkFalsy: true })
    .withMessage('Don\'t be shy, ask a question.')
    .isLength({ max: 250 })
    .withMessage('Can\'t be more than 250 characters.')
  ]

module.exports = {
    csrfProtection,
    asyncHandler,
    userValidators,
    loginValidators,
    questionValidators,
    answerValidators
}
