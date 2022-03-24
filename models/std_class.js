'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class std_class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  std_class.init({
    class_name: DataTypes.STRING,
    std_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'std_class',
  });
  return std_class;
};