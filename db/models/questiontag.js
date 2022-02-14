'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionTag = sequelize.define('QuestionTag', {
    questionId: {
      allowNull: false,
      references: { model: 'Questions'},
      type: Sequelize.INTEGER
    },
    tagId: {
      allowNull: false,
      references: { model: 'Tags' },
      type: Sequelize.INTEGER
    },
  }, {});
  QuestionTag.associate = function(models) {
    // associations can be defined here
  };
  return QuestionTag;
};