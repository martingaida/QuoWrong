const express = require('express');
const router = express.Router();
const { Question } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');

router.get('/', requireAuth, asyncHandler(async (req, res, next) => {

  const questions = await Question.findAll({
    include: [ 'Answers', 'QuestionVotes', 'Tags'],
    order: [['createdAt']]
  });


  res.render('index', { title: 'Ask a question', questions });
}));




module.exports = router;