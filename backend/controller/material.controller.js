const Material = require("../models/Material");
const CryptoJS = require('crypto-js')

const cadastrar = async(req,res)=>{
    const {idobra,idmovimento, descricao, categoria, quantidade, codlote} = req.body

    try{
        const criptcodlote = CryptoJS.AES.encrypt(codlote, 'bernardoeoretrogostodeacai').toString()
        await Material.create({
            idobra: idobra,
            idmovimento: idmovimento,
            descricao: descricao,
            categoria: categoria,
            quantidade: quantidade,
            codlote: criptcodlote
        })
        res.status(201).json({message: 'dados cadastrados'})
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
module.exports = {cadastrar}
