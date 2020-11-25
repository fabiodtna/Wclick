const Sequelize = require('sequelize');
const dbConfig = require('../../config/config');

require('../database');

const Tb_estado = require('../../models/Tb_estado')

const connection = new Sequelize(dbConfig);

Tb_estado.init(connection);

module.exports = connection;