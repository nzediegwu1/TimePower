'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.CHAR,
    surName: DataTypes.CHAR,
    username: DataTypes.CHAR,
    phoneNo: DataTypes.INTEGER,
    email: DataTypes.CHAR,
    birthday: DataTypes.DATEONLY,
    password: DataTypes.CHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
                User.hasMany(models.Task);
      }
    }
  });
  return User;
};