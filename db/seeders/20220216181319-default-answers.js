'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Answers', [
      {userId:'1', questionId:'1', content:`Af hashtag actually kale chips distillery literally chia jianbing next level semiotics selvage tousled. Disrupt yuccie irony, 3 wolf moon cornhole twee tumblr kogi biodiesel. Blog portland lo-fi kale chips direct trade. 3 wolf moon knausgaard everyday carry tofu la croix mumblecore gluten-free, lyft tbh before they sold out meggings post-ironic williamsburg. Williamsburg vinyl pitchfork hammock squid. Marfa gochujang poutine williamsburg, craft beer banjo kickstarter XOXO hella master cleanse meggings iPhone man bun.`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', questionId:'2', content:`Peepeepoo pants lookin ass.Pinterest cray kickstarter, ennui af affogato brooklyn vice knausgaard live-edge cornhole. Lyft tattooed tumeric +1 pitchfork pinterest sustainable mumblecore pabst seitan mustache af salvia. Locavore keffiyeh meggings, four loko hashtag chartreuse vape pitchfork`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', questionId:'3', content:'I would start by single-origin coffee slow-carb diet idk im not a foot doctor tho', createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Answers', null, {});

  }
};
