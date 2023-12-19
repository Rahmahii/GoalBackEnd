'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PlayersEvaluations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Players', key: 'id' }, onUpdate: 'CASCADE',
      },
      evaluatorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Players', key: 'id' }, onUpdate: 'CASCADE',
      },
      evaluation: {
        allowNull: false,
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
    await queryInterface.dropTable('PlayersEvaluations');
  }
};