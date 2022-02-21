'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    questionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Questions'}
    },
    src: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Question, {
      foreignKey: 'questionId'
    });
  };
  return Image;
};