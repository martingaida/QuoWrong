'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {userId:'1', headline:'Does science work?', content:`Pour-over tattooed poutine, pinterest banjo hexagon pug jean shorts typewriter tousled. Wayfarers polaroid single-origin coffee echo park poke kitsch shaman live-edge. Twee artisan unicorn semiotics fashion axe gentrify shabby chic tattooed portland four dollar toast vape. Man braid banh mi gentrify aesthetic schlitz. Vexillologist pinterest intelligentsia, chicharrones blog next level jean shorts jianbing DIY keffiyeh readymade flexitarian bitters. Synth lomo succulents skateboard. Normcore brunch adaptogen asymmetrical tbh iPhone woke tattooed flannel viral.`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline: 'I was spanking my 14-year-old son for coming home late and not doing his chores. He then punched me in the face and locked himself in his room. What do I do?', content:`I'm baby echo park taxidermy street art blog gentrify master cleanse. Wolf meggings mustache hashtag slow-carb, chillwave keffiyeh. Typewriter try-hard literally blue bottle knausgaard bicycle rights helvetica vape. Four dollar toast sartorial vegan VHS, salvia ennui venmo beard cloud bread coloring book etsy irony tumblr letterpress shabby chic`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:'Venmo craft beer vegan tacos?', content:`Mustache cloud bread tumblr taxidermy coloring book ugh. Viral offal gastropub freegan yr cardigan. Vinyl waistcoat selvage, locavore marfa butcher raw denim craft beer tofu drinking vinegar biodiesel farm-to-table letterpress. Farm-to-table yr salvia subway tile tousled enamel pin waistcoat forage iceland celiac umami selvage.`, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {


  return queryInterface.bulkDelete('Questions', null, {});

  }
};
