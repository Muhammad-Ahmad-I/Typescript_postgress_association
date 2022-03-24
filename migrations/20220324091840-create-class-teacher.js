'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('class_teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      class_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'std_classes',
          key: 'id',
        },
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teachers',
          key: 'id',
        },
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
    await queryInterface.dropTable('class_teachers');
  },
};
