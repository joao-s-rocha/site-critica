const { Sequelize, Model, DateTypes } = require('sequelize');
const db = require('./db');

const Filme = db.define('filme', {
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
    tipo: {
        type: DateTypes.STRING,
        allowNull: false,
    },
    lancamento: DateTypes.DATEONLY,
    sinopse: DateTypes.STRING
});

module.exports = Filme;