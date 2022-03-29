'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      teacher.belongsToMany(models.std_class, {
        as: 'class',
        through: 'teacher_class',
        foreignKey: 'teacherId',
      });
    }
  }
  teacher.init(
    {
      teacherName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'teacher',
    }
  );
  return teacher;
};
