'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Payments',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model:'Users', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model:'Employees', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },
      serviceId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model:'Services', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },
      paymentMethod:{
        allowNull: false,
        type: Sequelize.STRING
      },
      totalAmount:{
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      paidAmount:{
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      remainingAmount:{
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      isPartial:{
        type: Sequelize.BOOLEAN,
        default: false
      },
      parentPaymentId:{
        type: Sequelize.INTEGER,
        references:{ model:'Payments', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
      },
      status:{
        allowNull: false,
        type: Sequelize.ENUM('Pending','Approved','Rejected')
      },
      transactionId:{
        type: Sequelize.STRING ,
        unique: true
      },
      paymentDate:{
       allowNull: false,
       type: Sequelize.DATE 
      },
      relatedCommissionId:{
        type: Sequelize.INTEGER,
        references:{ model:'Employees', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
      },
        relatedWithdrawalRequestId:{
        type: Sequelize.INTEGER,
        references:{ model:'Employees', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
      },
      paymentProcessedByEmployeeId:{
        type: Sequelize.INTEGER,
        references:{ model:'WithdrawalRequests', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },
        processedAt: {
        type: Sequelize.DATE
      },
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};
