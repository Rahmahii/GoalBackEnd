'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user')
const Club = require('./club')

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Player.belongsTo(models.User)
      models.Player.belongsTo(models.Club)
      models.Player.hasMany(models.PlayersEvaluation)
      models.Player.hasMany(models.PlayersPosition)
      models.Player.hasMany(models.TeamsPlayer)
      models.Player.hasMany(models.GamesPlayer)
    }
  }
  Player.init({
    userId:  { type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId"
      }},
    weight: DataTypes.DOUBLE,
    height: DataTypes.DOUBLE,
    favouritFoot: DataTypes.INTEGER,
    clubId:  { type: DataTypes.INTEGER,
      references: {
        model: Club,
        key: "clubId"
      }},
    favouritNumber: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    shooting: DataTypes.INTEGER,
    dribbling: DataTypes.INTEGER,
    passing: DataTypes.INTEGER,
    stamine: DataTypes.INTEGER,
    grinta: DataTypes.INTEGER,
    defense: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};