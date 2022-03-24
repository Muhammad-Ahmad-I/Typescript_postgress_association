'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Std_Records',
      [
        {
          teacher_id: 3,
          std_id: 3,
          course_id: 5,
          class_id: 5,
          createdAt: '2018-01-12',
          updatedAt: '2022-02-02',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
