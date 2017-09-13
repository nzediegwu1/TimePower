'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.CHAR
            },
            surName: {
                type: Sequelize.CHAR
            },
            username: {
                type: Sequelize.CHAR
            },
            phoneNo: {
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.CHAR
            },
            birthday: {
                type: Sequelize.DATEONLY
            },
            password: {
                type: Sequelize.CHAR
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
};