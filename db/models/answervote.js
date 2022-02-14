'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnswerVote = sequelize.define('AnswerVote', {
    userId: {
      allowNull: false,
      references: { model: 'Users'},
      type: DataTypes.INTEGER
    },
    answerId: {
      allowNull: false,
      references: { model: 'Answers'},
      type: DataTypes.INTEGER
    },
    upVote: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {});
  AnswerVote.associate = function(models) {
    AnswerVote.belongsTo(models.Answer, {
      foreignKey: 'answerId'
    });
    AnswerVote.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return AnswerVote;
};