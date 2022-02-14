'use strict';
module.exports = (sequelize, DataTypes) => {
  const answerVote = sequelize.define('AnswerVote', {
    userId: {
      allowNull: false,
      references: { model: 'Users'},
      type: Sequelize.INTEGER
    },
    answerId: {
      allowNull: false,
      references: { model: 'Answers'},
      type: Sequelize.INTEGER
    },
    upVote: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    }
  }, {});
  answerVote.associate = function(models) {
    AnswerVote.belongsTo(mdoels.Answer, {
      foreignKey: 'answerId'
    });
    AnswerVote.belongsTo(mdoels.User, {
      foreignKey: 'userId'
    });
  };
  return answerVote;
};