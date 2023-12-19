'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }, onUpdate: 'CASCADE',
      },
      weight: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      height: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      favouritFoot: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      clubId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Clubs', key: 'id' }, onUpdate: 'CASCADE',
      },
      favouritNumber: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      speed: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      shooting: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      dribbling: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      passing: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      stamine: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      grinta: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      defense: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Players');
  }
};