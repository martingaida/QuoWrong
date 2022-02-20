'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {userId:'3', headline:`Is being superstitious a bad thing?`, content:`I’m not superstitious, but I am a little stitious.`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'4', headline:`Do bears eat beats?`, content:`False.`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'5', headline:`Is it ok to be procrastinating?`, content:`I am running away from my responsibilities. And it feels good..`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:`What is your dream life?`, content:`I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'2', headline:`Can I fake it till I make it?`, content:`I know exactly what to do but in a much more real sense, I have no idea what I'm doing`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'3', headline:`Drugs are bad, mmkay??`, content:`I'm cereal!`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'4', headline:`Is everything legal in Mexico?`, content:`Sounds like the American way..`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'5', headline:`Am I poor?`, content:`My parents had to put their cardboard box up for a second mortgage yesterday`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:`Fair is foul, and foul is fair?`, content:`Best things to do in New Jersey`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'2', headline:`When should I start to worry?`, content:`There's no tread left on my tires. My car drives like throwing a hot dog down the hallway`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'3', headline:`Where can I find Affirmative Action?`, content:`Huge Steven Seagal fan`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:'Is cereal a soup?', content:`Asking for a friend...`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'2', headline: 'I was spanking my 14-year-old son for coming home late and not doing his chores. He then punched me in the face and locked himself in his room. What do I do?', content:'', createdAt: new Date(), updatedAt: new Date()},
      {userId:'3', headline:'Congrats?', content:`People write congrats because they can spell congrajlashins. Change my mind.`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'5', headline:`Did Biden shoot himself in the foot in hopes of getting discharged from presidency?`, content:`I heard on the news that he shot himself in the foot behind the Resolute desk in the Oval Office on Wednesday morning in an effort to obtain a medical leave...`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:`What's the recipe for a grilled cheese sandwich?`, content:`I'm not much of a cook`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'4', headline:`Why would a bottle of hand sanitiser have an expiry date of 12 months after purchase when it’s 70% ethanol?`, content:`What expires exactly?`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:`Are zebras black with white stripes or white with black stripes?`, content:`Why does it matter?`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', headline:`What's it like to be a writer?`, content:`Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.`, createdAt: new Date(), updatedAt: new Date()},
      {userId:'2', headline:`Would you rather be feared or loved??`, content:`Easy. Both. I want people to be afraid of how much they love me.`, createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  down: (queryInterface, Sequelize) => {


  return queryInterface.bulkDelete('Questions', null, {});

  }
};
