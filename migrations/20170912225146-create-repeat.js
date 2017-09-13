'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Repeats', {
            TaskId: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                onDelete:"CASCADE",
                references: {
                    model: "Tasks",
                    key: "id",
                    as:"TaskId",
                },
            },
            sunday: {
                type: Sequelize.DATE
            },
            monday: {
                type: Sequelize.DATE
            },
            tuesday: {
                type: Sequelize.DATE
            },
            wednesday: {
                type: Sequelize.DATE
            },
            thursday: {
                type: Sequelize.DATE
            },
            friday: {
                type: Sequelize.DATE
            },
            saturday: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Repeats');
    }
};