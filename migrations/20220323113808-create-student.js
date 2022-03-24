'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      std_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      std_fname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      std_roll: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqe: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  },
};
