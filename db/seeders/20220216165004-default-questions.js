'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {userId:'1', headline:'Does this work?', content:'here is content', createdAt: new Date(), updatedAt: new Date()},
      {userId: '1', headline: 'I was spanking my 14-year-old son for coming home late and not doing his chores. He then punched me in the face and locked himself in his room. What do I do?', content:'excuse me wtf', createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:"I'm a 175 cm tall female and I think I'm too tall. How can I reduce my height by at least 4 centimeters?", content:'here is content', createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {


  return queryInterface.bulkDelete('Questions', null, {});

  }
};
