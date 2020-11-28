const Sequelize = require('sequelize');
const dbConfig = require('../../config/config');

require('../database');

const Tb_estado = require('../../models/Tb_estado');
const Tb_usuarios = require('../../models/Tb_usuario');

const connection = new Sequelize(dbConfig);

Tb_estado.init(connection);
Tb_usuarios.init(connection);

module.exports = connection;