'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Cuntry.hasMany(models.User)
      models.Cuntry.hasMany(models.Stadium)
    }
  }
  Cuntry.init({
    name: {type:DataTypes.STRING,unique: true}
  }, {
    sequelize,
    modelName: 'Cuntry',
  });
  return Cuntry;
};