'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Club.hasMany(models.Player)
    }
  }
  Club.init({
    name: {type:DataTypes.STRING,unique: true}
  }, {
    sequelize,
    modelName: 'Club',
  });
  return Club;
};