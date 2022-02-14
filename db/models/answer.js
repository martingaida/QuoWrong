'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {model: "Users"}
    },
    questionId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {model: "Questions"}
    },
    content: {
      allowNull: false,
      type: Sequelize.TEXT
    }
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
  };
  return Answer;
};
