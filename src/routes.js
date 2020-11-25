const express = require ('express');
const tb_estadoContoller = require('./controllers/Tb_estadoController')


const routes = express.Router();

routes.post('/Tb_estado', tb_estadoContoller.store);

module.exports = routes;