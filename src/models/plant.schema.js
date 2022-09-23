'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('plant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    family: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experienceLevel: {
      type: DataTypes.ENUM,
      values: ['easy', 'medium', 'hard'],
      allowNull: true,
    },
  });
};

