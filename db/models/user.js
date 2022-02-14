'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      allowNull: false,
      type: Sequelize.STRING(50)
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING(50)
    },
    userName: {
      allowNull: false,
      type: Sequelize.STRING(20),
      unique: true
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING(200),
      unique: true
    },
    hashedPassword: {
      allowNull: false,
      type: Sequelize.STRING.BINARY
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Answer, {
      foreignKey: 'userId'
    });
    User.hasMany(models.AnswerVote, {
      foreignKey: 'userId'
    });
    User.hasMany(models.QuestionVote, {
      foreignKey: 'userId'
    });
    User.hasMany(models.Question, {
      foreignKey: 'userId'
    });
  };
  return User;
};
