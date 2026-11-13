const Funcionario = require("../models/Funcionario");
const CryptoJS = require('crypto-js')

const cadastrar = async(req,res)=>{
    const {nome, email, senha} = req.body

    try{
        const criptsenha = CryptoJS.AES.encrypt(senha, 'bernardoeoretrogostodeacai').toString()
        await Funcionario.create({
            nome: nome,
            email: email,
            senha: criptsenha
        })
        res.status(201).json({message: 'dados cadastrados'})
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
module.exports = {cadastrar}
