const {Model, DataTypes} =  require('sequelize');

class Tb_avaliacaos extends Model{
    static init(sequelize){
        super.init({
            id_usuario: DataTypes.INTEGER,
            nr_nota: DataTypes.INTEGER,
            id_tcnota: DataTypes.INTEGER
          }, {
            sequelize
          })
    }

}

module.exports = Tb_avaliacaos;