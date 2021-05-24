const Sequelize = require('sequelize');
const db = require('../db');

const AgreementModel = db.define("agreements", {
    agreementId: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    superToken: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    sender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    receiver: {
        type: Sequelize.STRING,
        allowNull: false
    },
    flowRate: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    zlastChecked: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = AgreementModel;