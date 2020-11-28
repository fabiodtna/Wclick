const {Model, DataTypes} =  require('sequelize');

class Tb_categorias extends Model{
    static init(sequelize){
        super.init({
          id_pub: DataTypes.INTEGER,
          nm_categoria: DataTypes.STRING
        }, {
          sequelize
        })
    }

}

module.exports = Tb_categorias;