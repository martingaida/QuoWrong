const express = require('express');
const router = express.Router();
const { Answer } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler, answerValidators } = require('./utils'); //CHANGE AND CREATE ANSWER VALIDATORS
const { validationResult } = require('express-validator');



router.put('/edit/:id(\\d+)', requireAuth, answerValidators, asyncHandler( async (req, res, next) => {

  const { questionId, content, answerId } = req.body

  const validatorErrors = validationResult(req);


  if (validatorErrors.isEmpty()) {

    const answer = await Answer.findByPk(req.params.id);
    answer.content = content;
    await answer.save();


    res.json({data: answer});

  } else {
    const errors = validatorErrors.array().map((error) => error.msg);

    console.log(errors)

    res.json({errors: errors})

    // res.render('question', {
    //   title: 'Edit',
    //   errors,
    //   csrfToken: req.csrfToken(),
    // });
  }
}))

module.exports = router;