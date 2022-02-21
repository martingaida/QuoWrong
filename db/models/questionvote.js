'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionVote = sequelize.define('QuestionVote', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    questionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Questions'}
    },
    upVote: {
      allowNull: false,
      type: DataTypes.BOOLEAN
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
