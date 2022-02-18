const express = require('express');
const router = express.Router();
const { Answer } = require('../db/models');
const { QuestionVote } = require('../db/models');
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
}));

router.delete('/delete/:id(\\d+)', requireAuth, asyncHandler( async (req, res, next) => {

  const { id } = req.params;

  console.log(req.params)

  const answer = await Answer.findByPk(id)
  await answer.destroy();

  res.json({message: 'Success'})
}));

router.post('/questionVotes/query', requireAuth, asyncHandler(async (req, res, next) => {

  const { questionId, userId, upVote } = req.body;

  const vote = await QuestionVote.findOne({
    where: {
      questionId,
      userId
    }
  })

  // User has already voted
  if (vote) {
    console.log(`vote.upVote: ${vote.upVote}`)
    console.log(`upVote: ${upVote}`)

    // User clicks same button second time to delete his vote
    if (vote.upVote.toString() == upVote) {
      console.log('//////////////////////////////////////////////////////////////// upVote ==== upVote ////////////////////////////////////////////////////////////////')
      await vote.destroy()
    }
    // User clicks on the other button to change his vote
    else {
      console.log('//////////////////////////////////////////////////////////////// ELSE  ////////////////////////////////////////////////////////////////')
      await vote.destroy()
      const newVote = await QuestionVote.create({
        questionId,
        userId,
        upVote
      })
      await newVote.save()
    }
  } else {
    const newVote = await QuestionVote.create({
      questionId,
      userId,
      upVote
    })
    await newVote.save()
  }
  const voteCount = await QuestionVote.findAll({
    where: {
      questionId,
    }
  })
  res.json({ data: voteCount })
}));

module.exports = router;
