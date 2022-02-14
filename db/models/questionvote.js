'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionVote = sequelize.define('QuestionVote', {
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
    upVote: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    }
  }, {});
  QuestionVote.associate = function(models) {
    QuestionVote.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    QuestionVote.belongsTo(models.Question, {
      foreignKey: 'questionId'
    })
  };
  return QuestionVote;
};
