const express = require('express');
const router = express.Router();
const { Answer } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler, answerValidators } = require('./utils'); //CHANGE AND CREATE ANSWER VALIDATORS
const csrf = require('csurf');
const { validationResult } = require('express-validator');
const csrfProtection = csrf({ cookie:true });

router.post('/new', requireAuth, csrfProtection, answerValidators, asyncHandler( async (req, res, next) => {

    const { questionId, content } = req.body
    const { userId } = req.session.auth
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const answer = await Answer.create({
        userId,
        questionId,
        content
      });

      res.redirect(`/questions/${questionId}`);

    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('question', {
        title: 'invalid answer',
        questionId,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));


router.post('/edit/:id(\\d+)', requireAuth, csrfProtection, answerValidators, asyncHandler( async (req, res, next) => {

    const { questionId, content } = req.body
    const { userId } = req.session.auth
    const validatorErrors = validationResult(req);


    if (validatorErrors.isEmpty()) {

      const answer = await Answer.findByPk(req.params.id);
      question.content = content;
      await answer.save();

      res.redirect(`/questions/${questionId}`)
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);

      res.render('question', {
        title: 'Edit',
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }))


router.post('/delete/:id(\\d+)',  requireAuth, csrfProtection, asyncHandler( async (req, res, next) => {

    const id  = req.params.id;

    const answer = await Answer.findByPk(id);
    const questionId = answer.questionId
    await answer.destroy();

    res.redirect(`/questions/${questionId}`);
  }));

module.exports = router;
