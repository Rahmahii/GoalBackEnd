'use strict';
const {
  Model
} = require('sequelize');

const Player = require('./player')
const Position = require('./position')
module.exports = (sequelize, DataTypes) => {
  class PlayersPosition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.PlayersPosition.belongsTo(models.Player)
      models.PlayersPosition.belongsTo(models.Position)
    }
  }
  PlayersPosition.init({
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
    evaluation: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlayersPosition',
  });
  return PlayersPosition;
};