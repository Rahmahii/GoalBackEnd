'use strict';
const {
  Model
} = require('sequelize');
const Team = require('./team')
const Player = require('./player')
const Game = require('./game')
const Position = require('./position')
module.exports = (sequelize, DataTypes) => {
  class GamesPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.GamesPlayer.belongsTo(models.Player)
      models.GamesPlayer.belongsTo(models.Position)
      models.GamesPlayer.belongsTo(models.Team)
      models.GamesPlayer.belongsTo(models.Game)
    }
  }
  GamesPlayer.init({
    playerId: { type: DataTypes.INTEGER,
      references: {
        model: Player,
        key: "playerId"
      }},
    positionId: { type: DataTypes.INTEGER,
      references: {
        model: Position,
        key: "positionId"
      }},
    teamId: { type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: "teamId"
      }},
    gameId: { type: DataTypes.INTEGER,
      references: {
        model: Game,
        key: "gameId"
      }},
    golesNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GamesPlayer',
  });
  return GamesPlayer;
};