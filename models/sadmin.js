'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user')
module.exports = (sequelize, DataTypes) => {
  class SAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.SAdmin.belongsTo(models.User)
      models.SAdmin.hasMany(models.StadiumsAdmin)
    }
  }
  SAdmin.init({
    userId:  { type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId"
      }},
  }, {
    sequelize,
    modelName: 'SAdmin',
  });
  return SAdmin;
};