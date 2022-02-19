'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('QuestionVotes', [
        {userId:'1', questionId:'1', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'1', questionId:'2', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'1', questionId:'3', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'1', questionId:'4', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'1', questionId:'5', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'2', questionId:'1', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'2', questionId:'3', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'2', questionId:'4', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'2', questionId:'5', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'3', questionId:'1', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'3', questionId:'2', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'3', questionId:'3', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'3', questionId:'4', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'4', questionId:'1', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'4', questionId:'2', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'4', questionId:'3', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'4', questionId:'4', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'4', questionId:'5', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'5', questionId:'1', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'5', questionId:'3', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'5', questionId:'5', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'1', questionId:'6', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'2', questionId:'6', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'3', questionId:'6', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'4', questionId:'6', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'5', questionId:'6', upVote:'true', createdAt: new Date(), updatedAt: new Date()},
        {userId:'1', questionId:'7', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
        {userId:'2', questionId:'7', upVote:'false', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('QuestionVotes', null, {});
  }
};
