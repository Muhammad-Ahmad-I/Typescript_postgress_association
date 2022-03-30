'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class std_class extends Model {
    static associate(models) {
      std_class.hasMany(models.std_details, {
        as: 'student_class_detail',
        foreignKey: 'id',
      });
      std_class.belongsToMany(models.teacher, {
        as: 'teacher',
        through: 'teacher_class',
        foreignKey: 'classId',
      });
    }
  }
  std_class.init(
    {
      class_name: { type: DataTypes.STRING, allowNull: false },
      std_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'std_class',
    }
  );
  return std_class;
};
