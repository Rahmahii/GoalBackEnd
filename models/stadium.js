'use strict';
const {
  Model
} = require('sequelize');
const Cuntry = require('./cuntry')
const City = require('./city')
module.exports = (sequelize, DataTypes) => {
  class Stadium extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Stadium.hasMany(models.StadiumsAdmin)
      models.Stadium.hasMany(models.Game)
      models.User.belongsTo(models.Cuntry)
      models.User.belongsTo(models.City)
    }
  }
  Stadium.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    logo: DataTypes.STRING,
    email: DataTypes.STRING,
    length: DataTypes.DOUBLE,
    width: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    workHours: DataTypes.STRING,
    neighborhood:DataTypes.STRING,
    street:DataTypes.STRING,
    GoogleMapLink:DataTypes.STRING,
    description: DataTypes.STRING,
    cuntryId: { type: DataTypes.INTEGER,
      references: {
        model: Cuntry,
        key: "cuntryId"
      }},
      cityId: { type: DataTypes.INTEGER,
        references: {
          model: City,
          key: "cityId"
        }},
  }, {
    sequelize,
    modelName: 'Stadium',
    tableName:'Stadiums'
  },
);
  return Stadium;
};