'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class class_teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      class_teacher.belongsTo(models.std_class, {
        as: 'classes',
        foreignKey: 'id',
      });
      class_teacher.belongsTo(models.Teacher, {
        as: 'teachers',
        foreignKey: 'id',
      });
    }
  }
  class_teacher.init(
    {
      class_id: DataTypes.INTEGER,
      teacher_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'class_teacher',
    }
  );
  return class_teacher;
};
