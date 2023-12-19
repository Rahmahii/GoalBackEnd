'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GamesPlayers', {
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
      positionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Positions', key: 'id' }, onUpdate: 'CASCADE',
      },
      teamId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Teams', key: 'id' }, onUpdate: 'CASCADE',
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Games', key: 'id' }, onUpdate: 'CASCADE',
      },
      golesNumber: {
        type: Sequelize.INTEGER,
        defaultValue:0
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
    await queryInterface.dropTable('GamesPlayers');
  }
};