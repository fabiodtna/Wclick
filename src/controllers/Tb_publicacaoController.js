const Tb_publicacaos = require('../../models/Tb_publicacao');

module.exports = {
        async store(req, res){
        const {id_usuario, nm_user, nm_categoria, nm_descricao, nm_endereco} = req.body;

        await Tb_publicacaos.create({id_usuario, nm_user, nm_categoria, nm_descricao, nm_endereco});

        
    }
}