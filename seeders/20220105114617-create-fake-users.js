'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email:'john@gmail.com',
        role: 'admin',
        uuid:'18acd145-d22f-41dc-b496-b647e594bcd5',
        createdAt:'2022-01-05T09:59:31.839Z',
        updatedAt:'2022-01-05T09:59:31.839Z'
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
