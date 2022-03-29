'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class std_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      std_details.hasOne(models.std_class, {
        as: 'student_class',
        foreignKey: 'std_id',
      });
      std_details.hasMany(models.std_course, {
        as: 'student_course_detail',
        foreignKey: 'std_id',
      });
    }
  }
  std_details.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      contact_num: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'std_details',
    }
  );
  return std_details;
};
