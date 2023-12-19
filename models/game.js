'use strict';
const {
  Model
} = require('sequelize');
const Stadium = require('./stadium')
const Team = require('./team')
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Game.hasMany(models.GamesPlayer)
      models.Game.belongsTo(models.Team)
      models.Game.belongsTo(models.Stadium)
    }
  }
  Game.init({
    stadiumId:{ type: DataTypes.INTEGER,
      references: {
        model: Stadium,
        key: "stadiumId"
      }},
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    startDate: DataTypes.DATE,
    firstTeamId:{ type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: "firstTeamId"
      }},
    secondTeamId:{ type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: "secondTeamId"
      }},
    description: DataTypes.STRING,
    firstTeamScore: DataTypes.INTEGER,
    secondTeamScore: DataTypes.INTEGER,
    winnerId:{ type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: "winnerId"
      }},
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};