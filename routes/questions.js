const express = require('express');
const router = express.Router();
const { Question } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');
const csrf = require('csurf')
const csrfProtection = csrf({ cookie:true });

router.get('/', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

  const questions = await Question.findAll({
    include: [ 'Answers', 'QuestionVotes', 'Tags', 'Users'],
    order: [['createdAt']]
  });


  res.render('index', { title: 'Ask a question', questions, csrfToken:req.csrfToken()});
}));

router.get('/:id', requireAuth, csrfProtection, asyncHandler( async (req, res, next) => {

  const { id } = req.params
  const question = await Question.findByPk(id, { include: ['Answers', 'Tags', 'QuestionVotes','User']});
  const questions = [];
  questions.push(question);

  res.render('index', { title: 'Look at this one question', questions, csrfToken:req.csrfToken()})
}))




module.exports = router;
