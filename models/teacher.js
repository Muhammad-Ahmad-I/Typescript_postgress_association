'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Teacher.belongsTo(models.course, {
        as: 'courses',
        foreignKey: 'id',
      });
      Teacher.belongsTo(models.std_class, {
        as: 'classes',
        foreignKey: 'id',
      });
      Teacher.hasMany(models.class_teacher, {
        as: 'teachers',
        foreignKey: 'teacher_id',
      });
    }
  }
  Teacher.init(
    {
      teacher_name: DataTypes.STRING,
      teacher_subject: DataTypes.STRING,
      course_id: DataTypes.INTEGER,
      class_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Teacher',
    }
  );
  return Teacher;
};
