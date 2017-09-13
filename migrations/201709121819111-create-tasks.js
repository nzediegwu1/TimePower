'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.CHAR
            },
            alarmTime: {
                type: Sequelize.DATE
            },
            expired: {
                type: Sequelize.BOOLEAN
            },
            repeat: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            UserId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: "Users",
                    key: "id",
                    as: "UserId",
                },
            },
        });
    },
    
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Tasks');
    }
};