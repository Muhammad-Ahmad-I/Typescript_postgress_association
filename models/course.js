'use strict';
const { Model } = require('sequelize');
// const student = require('../models');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      course.belongsTo(models.student, {
        as: 'students',
        foreignKey: 'id',
      });
      course.hasOne(models.Teacher, {
        as: 'Teacher',
        foreignKey: 'course_id',
      });
      course.hasOne(models.Teacher, {
        as: 'Teacher',
        foreignKey: 'class_id',
      });
    }
  }
  course.init(
    {
      course_name: DataTypes.STRING,
      std_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'course',
    }
  );
  return course;
};
