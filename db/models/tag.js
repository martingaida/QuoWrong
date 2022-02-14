'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(20)
    },
  }, {});
  Tag.associate = function(models) {
    const columMapping = {
      through: 'QuestionTag',
      otherKey: 'questionId',
      foreignKey: 'tagId'
    };

    Tag.belongsToMany(models.Question, columMapping);
  };
  return Tag;
};