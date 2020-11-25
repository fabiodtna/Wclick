const {Model, DataTypes} =  require('sequelize');

class Tb_estados extends Model{
    static init(sequelize){
        super.init({
            nm_estado: DataTypes.STRING,
            sg_estado: DataTypes.STRING,
        },{
            sequelize
        })
    }

}

module.exports = Tb_estados;