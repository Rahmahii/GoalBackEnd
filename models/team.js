'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Team.hasMany(models.TeamsPlayer)
      models.Team.hasMany(models.GamesPlayer)
      models.Game.hasMany(models.Game)
    }
  }
  Team.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};