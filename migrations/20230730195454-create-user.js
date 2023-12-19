'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
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
        type: Sequelize.STRING,
        unique: true
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: true
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Latitude:{
        allowNull: true,
        type: Sequelize.STRING
      },
      Longitude:{
        allowNull: true,
        type: Sequelize.STRING
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
      natinalityId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Natinalities', key: 'id' }, onUpdate: 'CASCADE',
      },
      gender: {
        allowNull: false,
        type: Sequelize.BOOLEAN //0 -> woman 1 -> man
      },
      birthDate: {
        allowNull: false,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};