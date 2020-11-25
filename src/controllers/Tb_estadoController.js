const Tb_estados = require('../../models/Tb_estado');

module.exports = {
    async store(req, res){
        const{nm_estado, sg_estado } = req.body;

        const tb_estados = await Tb_estados.create({nm_estado, sg_estado});

        return res.json(tb_estados);
    }

}