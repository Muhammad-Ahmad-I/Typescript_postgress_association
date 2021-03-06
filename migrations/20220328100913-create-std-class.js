'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('std_classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      class_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      std_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('std_classes');
  },
};
