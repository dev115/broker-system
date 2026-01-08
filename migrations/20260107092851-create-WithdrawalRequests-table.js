'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WithdrawalRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Employees', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      requestedAmount: {
        type: Sequelize.DECIMAL
      },
      approvalStatus: {
        type: Sequelize.ENUM('Pending', 'Approved', 'Rejected'),
        allowNull: false
      },
      approvedByEmployeeId: {
        type: Sequelize.INTEGER,
        references: { model: 'Employees', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      withdrawalMethod: {
        type: Sequelize.STRING
      },
      transactionId: {
        type: Sequelize.INTEGER,
        unique: true
      },
      approvedAt: {
        type: Sequelize.DATE
      },
      reason: {
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WithdrawalRequests');
  }
};
