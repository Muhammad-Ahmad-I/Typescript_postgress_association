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
      std_details.belongsTo(models.std_class, {
        as: 'student_class',
        foreignKey: 'classId',
      });
      std_details.hasMany(models.std_course, {
        as: 'student_course_detail',
        foreignKey: 'std_id',
      });
    }
  }
  std_details.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      contact_num: { type: DataTypes.INTEGER, allowNull: false },
      classId: { type: DataTypes.INTEGER, allowNull: false },
      password: { allowNull: false, type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: 'std_details',
    }
  );
  return std_details;
};
