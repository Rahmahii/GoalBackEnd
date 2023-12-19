'use strict';
const {
  Model
} = require('sequelize');

const Player = require('./player')

module.exports = (sequelize, DataTypes) => {
  class PlayersEvaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.PlayersEvaluation.belongsTo(models.Player)
    }
  }
  PlayersEvaluation.init({
    playerId: { type: DataTypes.INTEGER,
      references: {
        model: Player,
        key: "playerId"
      }},
    evaluatorId: { type: DataTypes.INTEGER,
      references: {
        model: Player,
        key: "evaluatorId"
      }},
    evaluation: { type: DataTypes.INTEGER,
      validate: { min: 1, max:5}
      },
  }, {
    sequelize,
    modelName: 'PlayersEvaluation',
  });
  return PlayersEvaluation;
};