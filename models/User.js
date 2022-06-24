const { Sequelize, Model, DateTypes } = require('sequelize');
const db = require('./db');

const User = db.define('filme', {
    id: {
        type: DateTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DateTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DateTypes.STRING,
        allowNull: false,
    },
    nascimento: DateTypes.DATEONLY,
    sexo: DateTypes.ENUM('M','F'),
    nascionalidade: DateTypes.STRING
});

module.exports = User;