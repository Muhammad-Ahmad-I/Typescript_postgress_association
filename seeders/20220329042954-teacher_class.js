'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      'teacher_classes',
      [
        {
          teacherId: 1,
          classId: 1,
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
