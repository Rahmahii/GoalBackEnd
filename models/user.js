'use strict';
const {
  Model
} = require('sequelize');

const Cuntry = require('./cuntry')
const City = require('./city')
const Natinality = require('./natinality')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.belongsTo(models.Cuntry)
      models.User.belongsTo(models.City)
      models.User.belongsTo(models.Natinality)
      models.User.hasMany(models.Player)
      models.User.hasMany(models.SAdmin)
    }
  }
  User.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    username:{type:DataTypes.STRING , unique:true } ,
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    Longitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
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
    natinalityId: { type: DataTypes.INTEGER,
      references: {
        model: Natinality,
        key: "natinalityId"
      }},
    gender: DataTypes.BOOLEAN,
    birthDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};