'use strict';
const {
  Model
} = require('sequelize');
const SAdmin = require('./sadmin')
const Stadium = require('./stadium')
module.exports = (sequelize, DataTypes) => {
  class StadiumsAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.StadiumsAdmin.belongsTo(models.SAdmin)
      models.StadiumsAdmin.belongsTo(models.Stadium)
    }
  }
  StadiumsAdmin.init({
    sAdminId: { type: DataTypes.INTEGER,
      references: {
        model: SAdmin,
        key: "sAdminId"
      }},
    stadiumId:{ type: DataTypes.INTEGER,
      references: {
        model: Stadium,
        key: "stadiumId"
      }},
  }, {
    sequelize,
    modelName: 'StadiumsAdmin',
  });
  return StadiumsAdmin;
};