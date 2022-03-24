'use strict';
const { Model } = require('sequelize');
const student = require('../models');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      course.belongsTo(student);
      // define association here
    }
  }
  course.init(
    {
      course_name: DataTypes.STRING,
      std_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'course',
    }
  );
  return course;
};
