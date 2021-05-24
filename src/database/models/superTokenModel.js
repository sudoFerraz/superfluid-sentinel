const Sequelize = require('sequelize');
const db = require('../db');

const SuperTokensModel = db.define("supertokens", {
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    symbol: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    listed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
});

module.exports = SuperTokensModel;