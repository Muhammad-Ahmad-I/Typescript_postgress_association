'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          std_name: 'John Doe',
          std_fname: 'Doe Abrahm',
          std_roll: 1,
          createdAt: '2018-01-12',
          updatedAt: '2022-02-02',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
