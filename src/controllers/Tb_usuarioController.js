const Tb_usuarios = require('../../models/Tb_usuario');
var md5 = require('md5');

module.exports = {
    async store(req, res){
        const{id_cidade, nm_nome, nm_sobrenome, dt_nascimento, nm_email, senha, id_cl_tc,
        nr_cpf, nm_descricao, nr_telefone } = req.body;
        const nm_senha = md5(senha);

        const tb_usuarios = await Tb_usuarios.create({id_cidade, nm_nome, nm_sobrenome,
        dt_nascimento, nm_email, nm_senha, id_cl_tc, nr_cpf, nm_descricao, nr_telefone});

        return res.json(tb_usuarios);
    }

}