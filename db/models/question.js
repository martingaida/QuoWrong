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
    const columMapping = {
      through: 'QuestionTag',
      otherKey: 'tagId',
      foreignKey: 'questionId'
    }
    
    Question.hasMany(models.Answer, {
      foreignKey: 'anwerId'
    });
    Question.hasMany(models.QuestionVote, {
      foreignKey: 'questionId'
    });
    Question.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Question.belongsToMany(models.Tag, columMapping);
  };
  return Question;
};
