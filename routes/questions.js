const express = require('express');
const router = express.Router();
const { Question } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler, questionValidators } = require('./utils');
const csrf = require('csurf');
const { validationResult } = require('express-validator');
const csrfProtection = csrf({ cookie:true });

router.get('/', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

  const questions = await Question.findAll({
    include: [ 'Answers', 'QuestionVotes', 'Tags', 'User'],
    order: [['createdAt']]
  });


  res.render('index', { title: 'Ask a question', questions, csrfToken:req.csrfToken()});
}));

router.get('/:id(\\d+)', requireAuth, csrfProtection, asyncHandler( async (req, res, next) => {

  const { id } = req.params
  const question = await Question.findByPk(id, { include: ['Answers', 'Tags', 'QuestionVotes','User']});


  //res.render('question', {  question })
  res.render('question', {  question, csrfToken:req.csrfToken()})
}))




router.get('/new', requireAuth, csrfProtection, asyncHandler( async (req, res, next) => {

  res.render('new-question', { csrfToken:req.csrfToken() });
}));



router.post('/new', requireAuth, csrfProtection, questionValidators, asyncHandler( async (req, res, next) => {

  const { headline, content } = req.body
  const { userId } = req.session.auth
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const question = await Question.create({
      userId,
      headline,
      content
    });

    res.redirect('/questions');

  } else {

    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('new-question', {
      title: 'Ask a question.',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}));


router.post('/edit/:id(\\d+)', requireAuth, csrfProtection, questionValidators, asyncHandler( async (req, res, next) => {

  const { headline, content } = req.body

  const { userId } = req.session.auth
  const validatorErrors = validationResult(req);


  if (validatorErrors.isEmpty()) {

    const question = await Question.findByPk(req.params.id);
    question.headline = headline;
    question.content = content;
    await question.save();

    res.redirect(`/questions/${req.params.id}`)
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);

    res.render('question', {
      title: 'Edit',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }


}))

router.post('/delete/:id(\\d+)',  requireAuth, csrfProtection, asyncHandler( async (req, res, next) => {

  const id  = req.params.id;

  const question = await Question.findByPk(id, { include: ['Answers'] });

  await question.destroy();

  res.redirect('/questions');
}));








module.exports = router;
