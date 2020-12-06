const {Model, DataTypes} = require('sequelize');

class Tb_publicacaos extends Model{
    static init(sequelize){
        super.init({
            id_usuario: DataTypes.INTEGER,
            nm_user: DataTypes.STRING,
            nm_categoria: DataTypes.STRING,
            nm_descricao: DataTypes.STRING,
            nm_endereco: DataTypes.STRING
        },{
            sequelize
        })
    }
}
module.exports = Tb_publicacaos;