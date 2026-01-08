'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('TemporaryLeads',{
        id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model:'Employees', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },
       prefix: {
        type: Sequelize.ENUM('Mr', 'Mrs', 'Miss'),
        allowNull: true
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      dealAmount:{
        type: Sequelize.DECIMAL
      },
      duplicateReason:{
        type: Sequelize.STRING
      },
         createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('TemporaryLeads')
  }
};
