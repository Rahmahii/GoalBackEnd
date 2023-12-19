'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stadiumId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      startTime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      endTime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      firstTeamId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Teams', key: 'id' }, onUpdate: 'CASCADE',
      },
      secondTeamId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Teams', key: 'id' }, onUpdate: 'CASCADE',
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      firstTeamScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      secondTeamScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      winnerId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 0,
        references: { model: 'Teams', key: 'id' }, onUpdate: 'CASCADE',
      },
      price: {
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
    await queryInterface.dropTable('Games');
  }
};