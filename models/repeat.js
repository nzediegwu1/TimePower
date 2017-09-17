//  'use strict';
module.exports = (sequelize, DataTypes) => {
const Repeat = sequelize.define('Repeat', {
    sunday: DataTypes.DATE,
    monday: DataTypes.DATE,
    tuesday: DataTypes.DATE,
    wednesday: DataTypes.DATE,
    thursday: DataTypes.DATE,
    friday: DataTypes.DATE,
    saturday: DataTypes.DATE,
}, {
    classMethods: {
        associate: (models, user) => {
            // associations can be defined here
            Repeat.belongsTo(models.Task);
        },
    },
});
return Repeat;
};
