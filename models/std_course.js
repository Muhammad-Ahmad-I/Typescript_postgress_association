'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class std_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      std_course.belongsTo(models.std_details, {
        as: 'student_course_detail',
        foreignKey: 'id',
      });
    }
  }
  std_course.init(
    {
      course_name: DataTypes.STRING,
      std_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'std_course',
    }
  );
  return std_course;
};
