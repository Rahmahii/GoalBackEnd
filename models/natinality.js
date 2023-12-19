'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Natinality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Natinality.hasMany(models.User)
    }
  }
  Natinality.init({
    name: {type:DataTypes.STRING,unique: true}
  }, {
    sequelize,
    modelName: 'Natinality',
  });
  return Natinality;
};