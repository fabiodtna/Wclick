const tb_publicacaos = require('../../models/Tb_publicacao');

module.exports = {
    async store(req, res){
         
        tb_publicacaos.findAll().then(function(tb_publicacaos){
        res.json(tb_publicacaos);
        console.log(tb_publicacaos.dataValues);
    });
        
    }

} 