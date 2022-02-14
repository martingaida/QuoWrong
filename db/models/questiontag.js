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
    QuestionTag.belongsTo(models.Tag, {
      foreignKey: 'tagId'
    });
    QuestionTag.belongsTo(models.Question, {
      foreignKey: 'questionId'
    });
  };
  return QuestionTag;
};