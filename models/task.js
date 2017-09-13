'use strict';
module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        name: DataTypes.CHAR,
        description: DataTypes.STRING,//tobe updated in migration file
        alarmTime: DataTypes.DATE,
        expired: DataTypes.BOOLEAN,
        repeat: DataTypes.BOOLEAN,
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                Task.belongsTo(models.User);
                Task.hasMany(models.Repeat);
            }
        }
    });
    return Task;
};