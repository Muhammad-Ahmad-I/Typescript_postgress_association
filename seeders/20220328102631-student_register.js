'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      'std_details',
      [
        {
          firstName: 'Muhammad',
          lastName: 'Ahmad',
          contact_num: 123456789,
          classId: 1,
          email: 'test@gmail.com',
          password: 'helloPassword',
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
