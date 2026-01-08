'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.changeColumn('Employees', 'address', {
      type: Sequelize.STRING,
      allowNull: false // Change this to your desired modification
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Employees', 'address', {
      type: Sequelize.STRING,
      allowNull: true  // Revert to original state

    });
    await queryInterface.removeColumn('Employees','notes')
  }
};