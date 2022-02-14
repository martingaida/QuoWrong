'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Users"}
    },
    questionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Questions"}
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Answer.associate = function(models) {
    Answer.hasMany(models.AnswerVote, {
      foreignKey: 'answerId'
    });
    Answer.belongsTo(models.Question, {
      foreignKey: 'questionId'
    });
    Answer.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Answer;
};
