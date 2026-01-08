'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Employees',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rolePermissionId:{
        allowNull: false,
        references: {model:'RolePermissions' , key : 'id'},
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      prefix:{
        allowNull: true,
        type: Sequelize.ENUM('Mr','Mrs','Miss')
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false
      },
      phone: {
        allowNull: false,
         unique:true,
        type: Sequelize.STRING
      },
      dateOfBirth:{
        type: Sequelize.DATEONLY
      },
      address:{
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.ENUM('Active','Inactive','Suspended'),
        allowNull: false
      },
      role:{
        allowNull: false,
        type: Sequelize.STRING
      },
      totalBalance:{
        type: Sequelize.DECIMAL
      },
      otpCode:{
        type: Sequelize.INTEGER
      },
      otpExpiresAt:{
        type: Sequelize.DATE
      },
      commissionPercentage:{
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      commissionAmount:{
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      approvalStatus:{
        allowNull: false,
        type: Sequelize.ENUM('Pending','Approved','Rejected')
      },
      approvedByEmployeeId:{
        references:{model:'Employees',key:'id'},
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      approvedAt:{
        type:Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Employees');
  }
};
