'use strict';
module.exports = function(sequelize, DataTypes) {
  var Finance = sequelize.define('Finance', {
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Finance.belongsTo(models.Vehicle)
      }
    }
  });
  return Finance;
};
