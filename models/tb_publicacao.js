const {Model, DataTypes} =  require('sequelize');

class Tb_publicacaos extends Model{
    static init(sequelize){
        super.init({
          id_usuario: DataTypes.INTEGER,
          nm_publicação: DataTypes.STRING,
          nm_descricao: DataTypes.STRING,
          dt_pub: DataTypes.DATE
        }, {
          sequelize
        })
    }

}

module.exports = Tb_publicacaos;