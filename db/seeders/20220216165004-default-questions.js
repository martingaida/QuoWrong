'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {userId:'1', headline:'Is cereal a soup?', content:`Asking for a friend...`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'2', headline: 'I was spanking my 14-year-old son for coming home late and not doing his chores. He then punched me in the face and locked himself in his room. What do I do?', content:'', createdAt: new Date(), updatedAt: new Date()},
      {userId:'3', headline:'Congrats?', content:`People write congrats because they can spell congrajlashins. Change my mind.`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'5', headline:`Did Biden shoot himself in the foot in hopes of getting discharged from presidency?`, content:`I heard on the news that he shot himself in the foot behind the Resolute desk in the Oval Office on Wednesday morning in an effort to obtain a medical leave...`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:`What's the recipe for a grilled cheese sandwich?`, content:`I'm not much of a cook`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'4', headline:`Why would a bottle of hand sanitiser have an expiry date of 12 months after purchase when it’s 70% ethanol?`, content:`What expires exactly?`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:`Are zebras black with white stripes or white with black stripes?`, content:`What expires exactly?`, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {


  return queryInterface.bulkDelete('Questions', null, {});

  }
};
