'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      
      // addUser: function (user) {
      //   User.create({
      //     username: user.username,
      //     password: user.password,
      //     first_name: user.first_name,
      //     last_name: user.last_name,
      //     email: user.email,
      //     role: user.role,
      //     address: user.address,
      //     phone: user.phone
      //   }).then(function (err) {
      //     console.log(err.message)
      //   })
      // },
      
      // viewUser: function () {
      //
      // }
    }
  });
  return User;
};