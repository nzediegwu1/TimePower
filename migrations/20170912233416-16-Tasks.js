'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn('Tasks', 'description',{
            type: Sequelize.TEXT,
            allowNull: true
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Tasks', 'description');
    }
};