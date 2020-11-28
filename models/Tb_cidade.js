const {Model, DataTypes} =  require('sequelize');

class Tb_cidades extends Model{
    static init(sequelize){
        super.init({
          id_estado: DataTypes.INTEGER,
          nm_cidade: DataTypes.STRING
        }, {
          sequelize
        })
    }

}

module.exports = Tb_cidades;
