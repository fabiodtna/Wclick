const Tb_user = require('../../models/Tb_usuario');
var md5 = require('md5');

module.exports = {
    async store(req, res){
        const hash = md5(req.body.senha);
       let response = await Tb_user.findOne({
          where:{
              nm_email: req.body.email,
              nm_senha: hash
          }
      });
     if(response === null){
         res.send(JSON.stringify('error'));
     }else{
         res.send(response);
     }
    }

}