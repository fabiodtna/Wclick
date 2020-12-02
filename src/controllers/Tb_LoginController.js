const Tb_user = require('../../models/Tb_usuario');

module.exports = {
    async store(req, res){
       
       let response = await Tb_user.findOne({
          where:{
              nm_email: req.body.nm_email,
              nm_senha: req.body.nm_senha
          }
      });
     if(response === null){
         res.send(JSON.stringify('error'));
     }else{
         res.send(response);
     }
    }

}