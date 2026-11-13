const Obra = require("../models/Obra");
const CryptoJS = require('crypto-js')

const cadastrar = async(req,res)=>{
    const {nome, cnpj} = req.body

    try{
        const criptcnpj = CryptoJS.AES.encrypt(cnpj, 'bernardoeoretrogostodeacai').toString()
        await Obra.create({
            nome: nome,
            cnpj: criptcnpj
        })
        res.status(201).json({message: 'dados cadastrados'})
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
module.exports = {cadastrar}
