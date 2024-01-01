'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stadiums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      logo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      length: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      width: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      neighborhood:{
        allowNull: false,
        type: Sequelize.STRING
      },
      street:{
        allowNull: false,
        type: Sequelize.STRING
      },
      minimumPrice:{
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      cuntryId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Cuntries', key: 'id' }, onUpdate: 'CASCADE',
      },
      cityId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Cities', key: 'id' }, onUpdate: 'CASCADE',
      },
      GoogleMapLink:{
        allowNull: true,
        type: Sequelize.TEXT
      },
      latitude: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      workHours: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
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
    await queryInterface.dropTable('Stadiums');
  }
};