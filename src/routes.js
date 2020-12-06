const express = require ('express');
const usuarioContoller = require('./controllers/Tb_usuarioController');
const userController = require('./controllers/Tb_LoginController');
const createpostController = require('./controllers/Tb_publicacaoController');
const postsController = require('./controllers/Tb_postsController');

const routes = express.Router();

routes.post('/Tb_usuario', usuarioContoller.store);
routes.post('/login', userController.store);
routes.post('/CreatePost', createpostController.store);
routes.get('/Posts', postsController.store);


module.exports = routes;