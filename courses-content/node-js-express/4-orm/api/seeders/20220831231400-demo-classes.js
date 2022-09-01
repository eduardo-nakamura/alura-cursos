'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Classes', [
      {
        date_init: "2020-02-01",
        level_id: 1,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {});
  }
};
