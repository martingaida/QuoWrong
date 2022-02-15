'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'demo', 
        lastName:'demo', 
        email:'demo@demo.com',
        userName:'demo',
        hashedPassword:'$2a$10$kfaAF3gj16Xtar56kOIEquEiPU2coSKKQXeiNoyMpIQ3VYOW0c/Pi', 
        createdAt: new Date(), 
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
