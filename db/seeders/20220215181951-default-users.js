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
      {
        firstName: 'Abdiel',
        lastName: 'Dicki',
        userName: 'Danielle70',
        email: 'Spencer_Fisher@gmail.com',
        hashedPassword: '$2a$10$R/mS9kYaQQiXKGy4GToIK.ur/EY5840DGPLUuapzbDPf0jdBNN/vi',
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        firstName: 'Ada',
        lastName: 'Torphy',
        userName: 'Claire.Carroll',
        email: 'Jeramie_Bins@gmail.com',
        hashedPassword: '$2a$10$jfN6EmbFq43aC6f1FPvx1OlHb8x9kBSb.ElowdJHlgI2xvzcOQ5fS',
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        firstName: 'Kyra',
        lastName: 'Dickinson',
        userName: 'Devon_Ledner42',
        email: 'Eileen_Murray@hotmail.com',
        hashedPassword: '$2a$10$pzqNvR.DNcKRF6iEPvSYGukvWGjCLLDuIp/kNRFfFRF7rOzJZBHIu',
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        firstName: 'Cornelius',
        lastName: 'Gibson',
        userName: 'Hayden28',
        email: 'Ernie.Hudson23@yahoo.com',
        hashedPassword: '$2a$10$5nTXjknCJ/Yr4XceRvu6veXfuCwkZzYdPpGgunmrfCvhwJTrcjRHa',
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
