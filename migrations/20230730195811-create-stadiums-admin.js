'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StadiumsAdmins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sAdminId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'SAdmins', key: 'id' }, onUpdate: 'CASCADE',
      },
      stadiumId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Stadiums', key: 'id' }, onUpdate: 'CASCADE', 
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
    await queryInterface.dropTable('StadiumsAdmins');
  }
};