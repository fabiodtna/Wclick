const Tb_chat = require('../../models/Tb_chat');
module.exports ={
    async store (req, res){ 
        const { id_user, id_usert, nm_user,nm_descpost, nm_mensagem} = req.body;

        await Tb_chat.create({
            id_user, id_usert, nm_user, nm_descpost, nm_mensagem
        });
    }
}