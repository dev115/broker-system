'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Step 1: Drop the foreign key constraint (if it has a name; check with SHOW CREATE TABLE User;)
    await queryInterface.removeConstraint('Users', 'users_ibfk_1');  // Replace with actual constraint name

    // Step 2: Drop the column
    await queryInterface.removeColumn('Users', 'employeeId');
  },

  async down(queryInterface, Sequelize) {
    // Rollback: Add the column back
    await queryInterface.addColumn('Users', 'employeeId', {
      type: Sequelize.INTEGER,
      allowNull: false,  // Match original schema
      references: {
        model: 'Employee',  // Referenced table
        key: 'id'           // Referenced column
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'  // Match original options
    });

    // Rollback: Add the foreign key constraint
    await queryInterface.addConstraint('Users', {
      fields: ['employeeId'],
      type: 'foreign key',
      name: 'users_ibfk_1',  // Same as above
      references: {
        table: 'Employee',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  }
};