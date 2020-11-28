const {Model, DataTypes} =  require('sequelize');

class Tb_proposta extends Model{
    static init(sequelize){
        super.init({
          id_pub: DataTypes.INTEGER,
          id_user: DataTypes.INTEGER,
          vl_proposta: DataTypes.REAL,
          nm_mensage: DataTypes.STRING
        }, {
          sequelize
        })
    }

}

module.exports = Tb_proposta;