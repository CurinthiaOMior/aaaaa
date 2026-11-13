const Movimento = require("../models/Movimento");

const cadastrar = async(req,res)=>{
    const {tipo, quantidade, data} = req.body

    try{
        await Movimento.create({
            tipo: tipo,
            quantidade: quantidade,
            data: data,
        })
        res.status(201).json({message: 'dados cadastrados'})
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
module.exports = {cadastrar}
