'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Services',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       name:{
        allowNull: false,
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.TEXT
      },
       userId:{
        allowNull: false,
        references: {model:'Users' , key : 'id'},
        type: Sequelize.INTEGER
      },
       assignedByEmployeeId:{
        references: {model:'Employees' , key : 'id'},
        type: Sequelize.INTEGER,
      },
      basePrice:{
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      agreedPrice:{
        type: Sequelize.DECIMAL
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status:{
        allowNull: false,
        type: Sequelize.ENUM('Active','Inactive','Completed')
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
    await queryInterface.dropTable('Services');
  }
};
