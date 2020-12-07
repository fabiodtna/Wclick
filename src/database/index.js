const Sequelize = require('sequelize');
const dbConfig = require('../../config/config');

require('../database');

const Tb_usuarios = require('../../models/Tb_usuario');
const Tb_publicacaos = require('../../models/Tb_publicacao');
const Tb_chat = require('../../models/Tb_chat');

const connection = new Sequelize(dbConfig);


Tb_usuarios.init(connection);
Tb_publicacaos.init(connection);
Tb_chat.init(connection);

module.exports = connection;