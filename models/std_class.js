'use strict';
const { Model } = require('sequelize');
// const student = require('../models');
module.exports = (sequelize, DataTypes) => {
  class std_class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      std_class.belongsTo(models.student, {
        foreignKey: 'id',
      });
      std_class.hasMany(models.class_teacher, {
        as: 'classes',
        foreignKey: 'class_id',
      });
    }
  }
  std_class.init(
    {
      class_name: DataTypes.STRING,
      std_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'std_class',
    }
  );
  return std_class;
};
