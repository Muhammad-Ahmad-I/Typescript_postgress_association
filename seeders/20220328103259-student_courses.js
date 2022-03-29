'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Example:
    await queryInterface.bulkInsert(
      'std_courses',
      [
        {
          course_name: 'website Development',
          std_id: 2,
          createdAt: '2018-01-12',
          updatedAt: '2022-02-02',
        },
        {
          course_name: 'andriod Development',
          std_id: 2,
          createdAt: '2018-01-12',
          updatedAt: '2022-02-02',
        },
        {
          course_name: 'desktop Development',
          std_id: 3,
          createdAt: '2018-01-12',
          updatedAt: '2022-02-02',
        },
        {
          course_name: 'Block Chain Development',
          std_id: 4,
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
