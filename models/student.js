'use strict';
const { Model } = require('sequelize');
const course = require('../models');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.hasMany(course);
    }
  }
  student.init(
    {
      std_name: { type: DataTypes.STRING },
      std_fname: DataTypes.STRING,
      std_roll: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'student',
    }
  );
  return student;
};
