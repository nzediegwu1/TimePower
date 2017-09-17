//  'use strict';
module.exports = (sequelize, DataTypes) => {
const Task = sequelize.define('Task', {
    name: DataTypes.CHAR,
    description: DataTypes.STRING,
    alarmTime: DataTypes.DATE,
    expired: DataTypes.BOOLEAN,
    repeat: DataTypes.BOOLEAN,
}, {
    classMethods: {
        associate: (models) => {
            // associations can be defined here
            Task.belongsTo(models.User);
            Task.hasMany(models.Repeat);
        },
    },
});
return Task;
};
