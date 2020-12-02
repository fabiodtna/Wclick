const express = require ('express');
const estadoContoller = require('./controllers/Tb_estadoController');
const usuarioContoller = require('./controllers/Tb_usuarioController');
const usercontroller = require('./controllers/Tb_LoginController');


const routes = express.Router();


routes.post('/Tb_estado', estadoContoller.store);
routes.post('/Tb_usuario', usuarioContoller.store);
routes.post('/login', usercontroller.store);

module.exports = routes;