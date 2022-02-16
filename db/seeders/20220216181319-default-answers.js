'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Answers', [
        {userId:'1', questionId:'1', content:'answer urslef idiot', createdAt: new Date(), updatedAt: new Date()},
      {userId: '1', questionId: '2', content:'peepeepoo pants lookin ass', createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', questionId:"3", content:'i would start by cutting off feet? idk im not a foot doctor tho', createdAt: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Answers', null, {});

  }
};
