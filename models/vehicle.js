'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vehicle = sequelize.define('Vehicle', {
    type: DataTypes.STRING,
    number_plate: DataTypes.STRING,
    stnk: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Vehicle.belongsTo(models.User)
        Vehicle.hasMany(models.Finance)
      }
    }
  });
  return Vehicle;
};
