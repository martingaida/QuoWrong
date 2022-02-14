'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {model: Users}
    },
    headline: {
      allowNull: false,
      type: Sequelize.STRING(250)
    },
    content: {
      type: Sequelize.TEXT
    }
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};
