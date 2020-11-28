const {Model, DataTypes} =  require('sequelize');

class Tb_usuarios extends Model{
    static init(sequelize){
        super.init({
          id_cidade: DataTypes.INTEGER,
          nm_nome: DataTypes.STRING,
          nm_sobrenome: DataTypes.STRING,
          dt_nascimento: DataTypes.STRING,
          nm_email: DataTypes.STRING,
          nm_senha: DataTypes.STRING,
          id_cl_tc: DataTypes.INTEGER,
          nr_cpf: DataTypes.INTEGER,
          nm_descricao: DataTypes.STRING,
          nr_telefone: DataTypes.STRING
        }, {
          sequelize,
        })
    }

}

module.exports = Tb_usuarios;