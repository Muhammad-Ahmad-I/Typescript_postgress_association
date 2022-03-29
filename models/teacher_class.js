'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher_class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }

  teacher_class.init(
    {
      teacherId: DataTypes.INTEGER,
      classId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'teacher_class',
    }
  );
  return teacher_class;
};
