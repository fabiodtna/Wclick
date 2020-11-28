const express = require ('express');
const estadoContoller = require('./controllers/Tb_estadoController');
const usuarioContoller = require('./controllers/Tb_usuarioController');

const routes = express.Router();

routes.post('/Tb_estado', estadoContoller.store);
routes.post('/Tb_usuario', usuarioContoller.store);

module.exports = routes;