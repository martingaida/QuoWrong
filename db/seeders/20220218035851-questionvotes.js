'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('QuestionVotes', [{
      userId: '1',
      questionId: '1',
      upVote: true,
      createdAt: new Date(), 
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuestionVotes', null, {});
  }
};
