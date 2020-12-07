

const Tb_chat = require('../../models/Tb_chat');
module.exports ={
    async store (req, res){
        Tb_chat.findAll().then(function(tb_chats){
        res.json(tb_chats);
        }
    );
    }
}
