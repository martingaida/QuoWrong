'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(20)
    },
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};