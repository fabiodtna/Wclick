const {Model,  DataTypes} =  require('sequelize');

class Tb_chat extends Model{
    static init( sequelize){
        super.init({
            id_user: DataTypes.INTEGER,
            id_usert: DataTypes.INTEGER,
            nm_user: DataTypes.STRING,
            nm_descpost: DataTypes.STRING,
            nm_mensagem: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Tb_chat;