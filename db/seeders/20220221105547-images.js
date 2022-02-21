'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {questionId: '1', src: '/assets/img/questionId-1.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '2', src: '/assets/img/questionId-2.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '3', src: '/assets/img/questionId-3.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '4', src: '/assets/img/questionId-4.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '5', src: '/assets/img/questionId-5.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '6', src: '/assets/img/questionId-6.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '7', src: '/assets/img/questionId-7.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '8', src: '/assets/img/questionId-8.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '9', src: '/assets/img/questionId-9.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '10', src: '/assets/img/questionId-10.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '11', src: '/assets/img/questionId-11.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '12', src: '/assets/img/questionId-12.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '13', src: '/assets/img/questionId-13.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '14', src: '/assets/img/questionId-14.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '15', src: '/assets/img/questionId-15.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '16', src: '/assets/img/questionId-16.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '17', src: '/assets/img/questionId-17.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '18', src: '/assets/img/questionId-18.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '19', src: '/assets/img/questionId-19.jpeg', createdAt: new Date(), updatedAt: new Date()},
      {questionId: '20', src: '/assets/img/questionId-20.jpeg', createdAt: new Date(), updatedAt: new Date()}
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
