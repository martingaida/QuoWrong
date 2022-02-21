'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    headline: {
      allowNull: false,
      type: DataTypes.STRING(250)
    },
    content: {
      type: DataTypes.TEXT
    }
  }, {});
  Question.associate = function(models) {
    const columMapping = {
      through: 'QuestionTag',
      otherKey: 'tagId',
      foreignKey: 'questionId'
    }
    
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId',
      onDelete: 'cascade', 
      hooks: true
    });
    Question.hasMany(models.QuestionVote, {
      foreignKey: 'questionId',
      onDelete: 'cascade', 
      hooks: true
    });
    Question.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Question.belongsToMany(models.Tag, columMapping);
    
    Question.hasOne(models.Image, {
      foreignKey: 'questionId'
    });
  };
  return Question;
};
