'use strict';
const {
  Model
} = require('sequelize');

const Team = require('./team')
const Player = require('./player')
const Position = require('./position')
module.exports = (sequelize, DataTypes) => {
  class TeamsPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.TeamsPlayer.belongsTo(models.Player)
      models.TeamsPlayer.belongsTo(models.Position)
      models.TeamsPlayer.belongsTo(models.Team)
    }
  }
  TeamsPlayer.init({
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
  }, {
    sequelize,
    modelName: 'TeamsPlayer',
  });
  return TeamsPlayer;
};